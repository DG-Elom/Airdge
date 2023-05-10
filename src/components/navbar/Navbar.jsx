"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [token, setToken] = useState(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleToogle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <header className="flex items-center justify-between w-full max-w-4xl px-4 py-8 mx-auto">
      <Link
        href="/"
        className="text-3xl font-bold text-slate-900 dark:text-slate-200"
      >
        Airdge
      </Link>
      <div className="flex items-center gap-4">
        <div
          onClick={handleToogle}
          className="p-1 text-slate-500 dark:text-yellow-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
        >
          {theme === "dark" ? <BsSunFill /> : <BsFillMoonFill />}
        </div>
        {token ? (
          <>
            <Link href="/me">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
