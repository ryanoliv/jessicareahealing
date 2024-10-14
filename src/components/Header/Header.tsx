import Image from "next/image";
import MobileNav from "./Navs/MobileNav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="font-futura p-4 fixed top-0 z-30 flex items-center justify-between w-full bg-primary shadow-lg">
      <Link href="/">
        <Image
          src="/logos/jessica-logo.webp"
          alt="Jessica Rea Healing Logo"
          width={215}
          height={53}
        />
      </Link>
      <MobileNav />
    </header>
  );
}
