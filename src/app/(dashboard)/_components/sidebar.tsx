"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="w-full border-b border-gray-200 bg-white p-4 md:w-64 md:border-b-0 md:border-r">
      
      <h2 className="mb-6 rounded-lg bg-red-500 p-3 text-center text-lg font-bold text-white">
        Dashboard
      </h2>

      <nav>
        <ul className="flex gap-4 md:flex-col">
          <li>
            <Link
              href="/"
              className={`${
                isActive("/") ? "font-bold text-red-500" : "text-gray-700"
              } hover:text-red-500`}
            >
              Overview
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className={`${
                isActive("/projects") ? "font-bold text-red-500" : "text-gray-700"
              } hover:text-red-500`}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/courses"
              className={`${
                isActive("/courses") ? "font-bold text-red-500" : "text-gray-700"
              } hover:text-red-500`}
            >
              Courses
            </Link>
          </li>

          <li>
            <Link
              href="/settings"
              className={`${
                isActive("/settings") ? "font-bold text-red-500" : "text-gray-700"
              } hover:text-red-500`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
