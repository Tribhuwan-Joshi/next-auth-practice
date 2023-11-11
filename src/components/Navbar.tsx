"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className=" sticky top-0 py-4 px-10 lg:px-24 text-2xl bg-gray-900 ">
      <ul className="flex text-center gap-4 md:gap-10 flex-col md:flex-row justify-between ">
        <li>
          <Link className={`${pathname == "/" ? "underline" : ""}`} href="/">
            Home
          </Link>
        </li>
        <div className="text-center flex flex-col md:flex-row gap-4 md:gap-10">
          <li>
            <Link
              className={`${pathname == "/dashboard" ? "underline" : ""}`}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname == "/login" ? "underline" : ""}`}
              href="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname == "/register" ? "underline" : ""}`}
              href="/register"
            >
              Register
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
