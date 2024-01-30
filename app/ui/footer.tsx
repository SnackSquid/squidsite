import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex mt-auto h-10 md:h-20 md:text-l items-center justify-center">
      <Link href="/">
        <p className="dark:text-stone-200 hover:text-blue-300 duration-300">
          go home
        </p>
      </Link>
    </footer>
  );
}
