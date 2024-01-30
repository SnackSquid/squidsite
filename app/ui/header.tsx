"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="font-bold flex items-center justify-between border-b-2 border-grey-500 p-2 md:p-5">
      <Link
        className={`link ${pathname === "/" ? "active" : ""}`}
        href="/"
      >
        <div className="flex item-left items-center">
          <img
            className="h-7 w-auto rounded-full mr-2 text-xs font-light"
            src="/squid.png"
            alt="squid logo"
          />
          <h1 className="text-xl md:text-2xl dark:text-zinc-100 hover:text-emerald-600 duration-300">
            snacksquid
          </h1>
        </div>
      </Link>
      <nav className="flex items-center item-right dark:text-zinc-100">
        <ul className="text-l md:text-xl flex list-none space-x-3 md:space-x-10">
          <li>
            <Link
              className="hover:text-emerald-600 duration-300"
              href="/projects"
            >
              projects
            </Link>
          </li>
          <li>
            <a
              className="hover:text-emerald-600 duration-300"
              href="mailto:spencer@snacksquid.com"
              target="_blank"
            >
              contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
