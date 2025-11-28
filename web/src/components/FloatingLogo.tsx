import Link from "next/link";
import Image from "next/image";

export default function FloatingLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="group fixed top-4 md:top-6 left-4 md:left-6 z-60 flex items-center gap-4 opacity-100 hover:opacity-70 transition-opacity duration-500 pointer-events-none md:pointer-events-auto"
    >
      <Image
        src="/Daryl_Smith_Consulting_Logo.png?v=20251119"
        alt="Daryl Smith Consulting logo"
        width={800}
        height={320}
        loading="lazy"
        className="w-auto h-48 object-contain"
      />
      <span
        className="text-lg md:text-xl font-semibold tracking-wide"
        style={{ color: "#37CC97" }}
      >
        Forging the Future
      </span>
    </Link>
  );
}
