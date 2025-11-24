import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="block group">
      <div className="flex flex-col leading-none">
        <span className="font-serif text-2xl md:text-3xl font-light tracking-tight text-white group-hover:opacity-70 transition-opacity duration-300">
          Volcrest
        </span>
        <span className="font-sans text-[0.65rem] md:text-xs uppercase tracking-wide-caps text-white mt-0.5 group-hover:opacity-70 transition-opacity duration-300">
          Capital
        </span>
      </div>
    </Link>
  );
}

