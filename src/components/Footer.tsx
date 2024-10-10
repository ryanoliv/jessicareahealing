import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4">
      <div className="py-8 flex flex-col items-center gap-4 border-t border-accent">
        <Image
          src="/logos/jr-footer.webp"
          alt="jessica rea footer logo"
          width={50}
          height={50}
        />
        <p className="text-xs text-secondaryLight">
          &copy; Jessica Rea {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
