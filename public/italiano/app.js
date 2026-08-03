/* Verbi — offline Italian verb flashcards */
"use strict";

/* ---------------- Conjugation engine ---------------- */

const PERSONS = ["io", "tu", "lui/lei", "noi", "voi", "loro"];
const SPEAK_PRONOUN = ["io", "tu", "lui", "noi", "voi", "loro"];
const REFL_PRON = ["mi", "ti", "si", "ci", "vi", "si"];
const PRES_END = {
  are: ["o", "i", "a", "iamo", "ate", "ano"],
  ere: ["o", "i", "e", "iamo", "ete", "ono"],
  ire: ["o", "i", "e", "iamo", "ite", "ono"],
};
const ISC_END = ["isco", "isci", "isce", "iamo", "ite", "iscono"];
const IMPF_VOWEL = { are: "av", ere: "ev", ire: "iv" };
const IMPF_END = ["o", "i", "a", "amo", "ate", "ano"];
const FUT_END = ["ò", "ai", "à", "emo", "ete", "anno"];
const COND_END = ["ei", "esti", "ebbe", "emmo", "este", "ebbero"];
const AVERE_PRES = ["ho", "hai", "ha", "abbiamo", "avete", "hanno"];
const ESSERE_PRES = ["sono", "sei", "è", "siamo", "siete", "sono"];

const TENSES = [
  { id: "presente", label: "Presente" },
  { id: "passato", label: "Passato prossimo" },
  { id: "imperfetto", label: "Imperfetto" },
  { id: "futuro", label: "Futuro" },
  { id: "condizionale", label: "Condizionale" },
];

function baseInf(v) {
  return v.refl ? v.it.slice(0, -2) + "e" : v.it; // alzarsi -> alzare
}

// join stem+ending with -are spelling rules (cerchi, mangi, studiamo)
function joinPres(stem, end, type) {
  if (type === "are" && (stem.endsWith("c") || stem.endsWith("g")) &&
      !stem.endsWith("ci") && !stem.endsWith("gi") && end[0] === "i") {
    return stem + "h" + end;
  }
  if (stem.endsWith("i") && end[0] === "i") return stem.slice(0, -1) + end;
  return stem + end;
}

function regularFutStem(stem, type) {
  if (type === "are") {
    if (stem.endsWith("ci") || stem.endsWith("gi")) return stem.slice(0, -1) + "er";
    if (stem.endsWith("c") || stem.endsWith("g")) return stem + "her";
    return stem + "er";
  }
  return stem + (type === "ire" ? "ir" : "er");
}

function conjugate(v) {
  const inf = baseInf(v);
  const type = inf.slice(-3); // are | ere | ire
  const stem = inf.slice(0, -3);

  const pres = v.pres ? v.pres.slice()
    : (v.isc ? ISC_END : PRES_END[type]).map((e) => joinPres(stem, e, type));

  const impf = v.impf ? v.impf.slice()
    : IMPF_END.map((e) => stem + IMPF_VOWEL[type] + e);

  const futStem = v.fut || regularFutStem(stem, type);
  const fut = FUT_END.map((e) => futStem + e);
  const cond = COND_END.map((e) => futStem + e);

  const pp = v.pp || stem + { are: "ato", ere: "uto", ire: "ito" }[type];
  const essereAux = v.aux === "e" || !!v.refl;

  const passato = [0, 1, 2, 3, 4, 5].map((i) => {
    let part = pp;
    if (essereAux && pp.endsWith("o")) {
      part = i < 3 ? pp.slice(0, -1) + "o/a" : pp.slice(0, -1) + "i/e";
    }
    return (essereAux ? ESSERE_PRES[i] : AVERE_PRES[i]) + " " + part;
  });

  const addRefl = (forms) => forms.map((f, i) => REFL_PRON[i] + " " + f);
  const out = {
    presente: v.refl ? addRefl(pres) : pres,
    passato: v.refl ? addRefl(passato) : passato,
    imperfetto: v.refl ? addRefl(impf) : impf,
    futuro: v.refl ? addRefl(fut) : fut,
    condizionale: v.refl ? addRefl(cond) : cond,
    pp,
    aux: essereAux ? "essere" : "avere",
  };
  return out;
}

// Pre-compute all tables once
const TABLES = {};
VERBS.forEach((v) => { TABLES[v.it] = conjugate(v); });

/* ---------------- Speech ---------------- */

let itVoices = [];
function refreshVoices() {
  if (!("speechSynthesis" in window)) return;
  itVoices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith("it"));
  const sel = document.getElementById("voiceSel");
  if (sel) {
    const cur = state.settings.voice;
    sel.innerHTML = itVoices.length
      ? itVoices.map((v) => `<option value="${esc(v.name)}"${v.name === cur ? " selected" : ""}>${esc(v.name)}${v.localService ? " (offline)" : ""}</option>`).join("")
      : "<option value=''>No Italian voice found</option>";
  }
}
if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = refreshVoices;
}

function speakIt(text) {
  if (!("speechSynthesis" in window) || !text) return;
  const clean = text.replace(/\/(a|e)\b/g, "").replace(/\(.*?\)/g, "");
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = "it-IT";
  const chosen = itVoices.find((v) => v.name === state.settings.voice) || itVoices[0];
  if (chosen) u.voice = chosen;
  u.rate = state.settings.rate;
  speechSynthesis.speak(u);
}

/* ---------------- State / spaced repetition ---------------- */

const STORE_KEY = "verbi-state-v1";
const MIN = 60 * 1000, HOUR = 60 * MIN, DAY = 24 * HOUR;
// interval per box level, "Good" moves one box up
const INTERVALS = [1 * MIN, 10 * MIN, 30 * MIN, 2 * HOUR, 8 * HOUR, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY];

const defaultSettings = {
  direction: "it-en", // it-en | en-it | mixed
  autoSpeak: true,
  rate: 0.9,
  voice: "",
  newPerSession: 20,
  quizTenses: ["presente", "passato", "imperfetto", "futuro", "condizionale"],
  quizPool: "studied", // studied | all
};

let state = load();
function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      s.settings = Object.assign({}, defaultSettings, s.settings);
      s.cards = s.cards || {};
      return s;
    }
  } catch (e) { /* corrupted -> start fresh */ }
  return { cards: {}, settings: Object.assign({}, defaultSettings) };
}
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

function cardOf(it) {
  return state.cards[it]; // undefined = never seen
}
function grade(it, g) { // g: again | hard | good | easy
  const now = Date.now();
  let c = state.cards[it] || { box: 0, due: now, seen: 0, lapses: 0 };
  c.seen++;
  if (g === "again") { c.lapses++; c.box = 0; c.due = now + INTERVALS[0]; }
  else if (g === "hard") { c.due = now + Math.max(INTERVALS[0], INTERVALS[c.box] / 2); }
  else if (g === "good") { c.box = Math.min(c.box + 1, INTERVALS.length - 1); c.due = now + INTERVALS[c.box]; }
  else { c.box = Math.min(c.box + 2, INTERVALS.length - 1); c.due = now + INTERVALS[c.box]; }
  state.cards[it] = c;
  save();
}

function dueCards() {
  const now = Date.now();
  return VERBS.filter((v) => { const c = cardOf(v.it); return c && c.due <= now; });
}
function newCards(limit) {
  const list = VERBS.filter((v) => !cardOf(v.it));
  return limit > 0 ? list.slice(0, limit) : list;
}
function studiedVerbs() { return VERBS.filter((v) => cardOf(v.it)); }

/* ---------------- UI helpers ---------------- */

function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;"); }
const $ = (id) => document.getElementById(id);
function show(screen) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  $(screen).classList.add("active");
  if (screen === "home") renderHome();
}

function tableHTML(v, activeTense) {
  const t = TABLES[v.it];
  const tabs = TENSES.map((tn) =>
    `<button class="tab${tn.id === activeTense ? " on" : ""}" data-tense="${tn.id}">${tn.label}</button>`).join("");
  const rows = t[activeTense].map((f, i) =>
    `<div class="crow" data-say="${esc(SPEAK_PRONOUN[i] + " " + f)}"><span class="pers">${PERSONS[i]}</span><span class="form">${esc(f)}</span><span class="spk">🔊</span></div>`).join("");
  return `<div class="tabs">${tabs}</div><div class="ctable">${rows}</div>`;
}

function bindTable(container, v) {
  container.querySelectorAll(".tab").forEach((b) => {
    b.onclick = () => {
      container.innerHTML = tableHTML(v, b.dataset.tense);
      bindTable(container, v);
    };
  });
  container.querySelectorAll(".crow").forEach((r) => {
    r.onclick = () => speakIt(r.dataset.say);
  });
}

/* ---------------- Home ---------------- */

function renderHome() {
  const total = VERBS.length;
  const started = studiedVerbs().length;
  const mastered = studiedVerbs().filter((v) => cardOf(v.it).box >= 5).length;
  const due = dueCards().length;
  $("statTotal").textContent = total;
  $("statStarted").textContent = started;
  $("statMastered").textContent = mastered;
  $("statDue").textContent = due;
  $("studyBtn").textContent = due > 0 ? `Study (${due} due)` : "Study";
}

/* ---------------- Study session ---------------- */

let session = null;

function startSession() {
  const lim = state.settings.newPerSession;
  const queue = dueCards().concat(newCards(lim === -1 ? 0 : lim));
  if (!queue.length) {
    // everything reviewed and no new left within limit -> pull more new
    queue.push(...newCards(0).slice(0, 20));
  }
  if (!queue.length) { alert("Nothing to study — every verb is scheduled for later. Try the Conjugation quiz!"); return; }
  session = { queue, done: 0, startCount: queue.length };
  show("study");
  nextCard();
}

function cardDirection() {
  const d = state.settings.direction;
  return d === "mixed" ? (Math.random() < 0.5 ? "it-en" : "en-it") : d;
}

function nextCard() {
  // re-collect due cards that came back during the session (Again button)
  if (!session.queue.length) {
    const back = dueCards();
    if (back.length) session.queue.push(...back);
  }
  if (!session.queue.length) { endSession(); return; }
  const v = session.queue.shift();
  session.current = v;
  session.dir = cardDirection();
  session.flipped = false;
  $("progress").textContent = `${session.done + 1} / ${session.done + 1 + session.queue.length}`;
  const isNew = !cardOf(v.it);
  $("newBadge").style.display = isNew ? "inline-block" : "none";
  const frontText = session.dir === "it-en" ? v.it : v.en;
  $("cardFront").innerHTML =
    `<div class="big">${esc(frontText)}</div>` +
    (session.dir === "it-en" ? `<button class="mini spk-btn" id="sayFront">🔊</button>` : "") +
    `<div class="hint">tap to reveal</div>`;
  $("cardBack").innerHTML = "";
  $("card").classList.remove("flipped");
  $("gradeRow").style.display = "none";
  const sf = $("sayFront");
  if (sf) sf.onclick = (e) => { e.stopPropagation(); speakIt(v.it); };
  if (session.dir === "it-en" && state.settings.autoSpeak) speakIt(v.it);
}

function flipCard() {
  if (session.flipped) return;
  session.flipped = true;
  const v = session.current;
  const t = TABLES[v.it];
  const other = session.dir === "it-en" ? v.en : v.it;
  $("cardBack").innerHTML =
    `<div class="big">${esc(other)}</div>` +
    `<button class="mini spk-btn" id="sayBack">🔊 ${esc(v.it)}</button>` +
    `<div class="meta">participio: <b>${esc(t.pp)}</b> · aux: <b>${t.aux}</b>${v.note ? `<br><i>${esc(v.note)}</i>` : ""}</div>` +
    `<div id="cardTable">${tableHTML(v, "presente")}</div>`;
  $("card").classList.add("flipped");
  $("gradeRow").style.display = "flex";
  $("sayBack").onclick = (e) => { e.stopPropagation(); speakIt(v.it); };
  bindTable($("cardTable"), v);
  if (session.dir === "en-it" && state.settings.autoSpeak) speakIt(v.it);
}

function gradeCurrent(g) {
  grade(session.current.it, g);
  session.done++;
  nextCard();
}

function endSession() {
  alert(`Session complete — ${session.done} cards reviewed. Ottimo lavoro! 🇮🇹`);
  session = null;
  show("home");
}

/* ---------------- Conjugation quiz ---------------- */

let quiz = null;

function startQuiz() {
  const pool = state.settings.quizPool === "studied" && studiedVerbs().length >= 5
    ? studiedVerbs() : VERBS;
  quiz = { pool, right: 0, wrong: 0 };
  show("quiz");
  nextQuiz();
}

function nextQuiz() {
  const v = quiz.pool[Math.floor(Math.random() * quiz.pool.length)];
  const enabled = TENSES.filter((t) => state.settings.quizTenses.includes(t.id));
  const tense = enabled[Math.floor(Math.random() * enabled.length)] || TENSES[0];
  const person = Math.floor(Math.random() * 6);
  quiz.current = { v, tense, person };
  $("quizScore").textContent = `✓ ${quiz.right}  ✗ ${quiz.wrong}`;
  $("quizPrompt").innerHTML =
    `<div class="qverb">${esc(v.it)}</div>` +
    `<div class="qmeta">${esc(v.en)}</div>` +
    `<div class="qask"><b>${tense.label}</b> · <b>${PERSONS[person]}</b></div>`;
  $("quizAnswer").innerHTML = "";
  $("quizReveal").style.display = "inline-block";
  $("quizJudge").style.display = "none";
}

function revealQuiz() {
  const { v, tense, person } = quiz.current;
  const form = TABLES[v.it][tense.id][person];
  $("quizAnswer").innerHTML = `<div class="qform">${esc(form)}</div>`;
  $("quizReveal").style.display = "none";
  $("quizJudge").style.display = "flex";
  speakIt(SPEAK_PRONOUN[person] + " " + form);
}

/* ---------------- Browse ---------------- */

function renderBrowse(filter) {
  const q = (filter || "").toLowerCase().trim();
  const list = VERBS.filter((v) => !q || v.it.includes(q) || v.en.toLowerCase().includes(q));
  $("verbList").innerHTML = list.map((v) => {
    const c = cardOf(v.it);
    const dot = !c ? "" : c.box >= 5 ? "🟢" : "🟡";
    return `<div class="vrow" data-verb="${esc(v.it)}"><span class="vit">${esc(v.it)}</span><span class="ven">${esc(v.en)}</span><span>${dot}</span></div>`;
  }).join("") || "<div class='hint' style='padding:20px'>No matches</div>";
  $("verbList").querySelectorAll(".vrow").forEach((r) => {
    r.onclick = () => openDetail(r.dataset.verb);
  });
}

function openDetail(it) {
  const v = VERBS.find((x) => x.it === it);
  const t = TABLES[it];
  $("detailBody").innerHTML =
    `<div class="big">${esc(v.it)} <button class="mini spk-btn" id="sayDetail">🔊</button></div>` +
    `<div class="meta">${esc(v.en)} · participio: <b>${esc(t.pp)}</b> · aux: <b>${t.aux}</b>${v.note ? `<br><i>${esc(v.note)}</i>` : ""}</div>` +
    `<div id="detailTable">${tableHTML(v, "presente")}</div>`;
  $("sayDetail").onclick = () => speakIt(v.it);
  bindTable($("detailTable"), v);
  $("detail").classList.add("open");
}

/* ---------------- Settings ---------------- */

function renderSettings() {
  $("dirSel").value = state.settings.direction;
  $("autoSpeakChk").checked = state.settings.autoSpeak;
  $("rateRange").value = state.settings.rate;
  $("rateVal").textContent = state.settings.rate + "×";
  $("newSel").value = String(state.settings.newPerSession);
  $("poolSel").value = state.settings.quizPool;
  document.querySelectorAll("#tenseChks input").forEach((c) => {
    c.checked = state.settings.quizTenses.includes(c.value);
  });
  refreshVoices();
}

function bindSettings() {
  $("dirSel").onchange = (e) => { state.settings.direction = e.target.value; save(); };
  $("autoSpeakChk").onchange = (e) => { state.settings.autoSpeak = e.target.checked; save(); };
  $("rateRange").oninput = (e) => {
    state.settings.rate = parseFloat(e.target.value);
    $("rateVal").textContent = state.settings.rate + "×"; save();
  };
  $("voiceSel").onchange = (e) => { state.settings.voice = e.target.value; save(); };
  $("newSel").onchange = (e) => { state.settings.newPerSession = parseInt(e.target.value, 10); save(); };
  $("poolSel").onchange = (e) => { state.settings.quizPool = e.target.value; save(); };
  document.querySelectorAll("#tenseChks input").forEach((c) => {
    c.onchange = () => {
      const on = [...document.querySelectorAll("#tenseChks input:checked")].map((x) => x.value);
      if (!on.length) { c.checked = true; return; } // keep at least one
      state.settings.quizTenses = on; save();
    };
  });
  $("testVoiceBtn").onclick = () => speakIt("Ciao! Io parlo italiano. Buon viaggio!");
  $("resetBtn").onclick = () => {
    if (confirm("Reset all learning progress? This cannot be undone.")) {
      state.cards = {}; save(); renderHome(); alert("Progress cleared.");
    }
  };
}

/* ---------------- Wire up ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
  refreshVoices();
  bindSettings();

  $("studyBtn").onclick = startSession;
  $("quizBtn").onclick = startQuiz;
  $("browseBtn").onclick = () => { renderBrowse(""); $("searchBox").value = ""; show("browse"); };
  $("settingsBtn").onclick = () => { renderSettings(); show("settings"); };
  document.querySelectorAll(".backBtn").forEach((b) => { b.onclick = () => { session = null; show("home"); }; });

  $("card").onclick = flipCard;
  document.querySelectorAll("#gradeRow button").forEach((b) => {
    b.onclick = () => gradeCurrent(b.dataset.g);
  });

  $("quizReveal").onclick = revealQuiz;
  $("quizRight").onclick = () => { quiz.right++; nextQuiz(); };
  $("quizWrong").onclick = () => { quiz.wrong++; nextQuiz(); };

  $("searchBox").oninput = (e) => renderBrowse(e.target.value);
  $("detailClose").onclick = () => $("detail").classList.remove("open");

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
