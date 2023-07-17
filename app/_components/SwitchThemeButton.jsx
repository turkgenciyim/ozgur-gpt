"use client";

import { useRouter } from "next/navigation";
import { toggleScheme } from "@/app/utils/colorScheme";
export default function SwitchThemeButton() {
  const router = useRouter();

  const toggle = async () => {
    await toggleScheme();

    router.refresh();
  };
  return (
    <button
      type="button"
      className="absolute bottom-0 z-10 flex items-center justify-center px-8 py-4 transition-all -translate-x-1/2 translate-y-full border border-green-200 rounded-b-full dark:shadow dark:border-green-800 bg-green-100/20 hover:bg-green-100/10 dark:bg-green-500/20 dark:hover:bg-green-500/10 border-t-transparent w-fit left-1/2 rounded-xl"
      onClick={toggle}
    >
      <span className="block text-sm dark:hidden text-zinc-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 duration-1000 rotate-45 fill-emerald-800 stroke-emerald-700 animate-out direction-alternate repeat-infinite"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </span>
      <span className="hidden text-sm dark:block text-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 duration-1000 fill-emerald-500 stroke-emerald-600 animate-out spin-out-180 repeat-infinite"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </span>
    </button>
  );
}
