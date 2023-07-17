import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import SwitchThemeButton from "@/app/_components/SwitchThemeButton";
const Navigation = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };
  return (
    <nav className="relative z-40 flex flex-col flex-wrap items-center justify-between flex-1 w-full px-6 py-4 mx-auto mb-24 space-x-4 border-b border-green-100 dark:border-green-800 sm:py-12 xl:px-8 lg:gap-0 lg:flex-row backdrop-blur-sm">
      <SwitchThemeButton />
      <div className="items-center justify-center hidden space-x-8 sm:flex xl:basis-1/3">
        <Link
          className="transition-all dark:text-slate-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-300"
          href={"/ozellikler"}
        >
          Özellikler
        </Link>
        <Link
          className="transition-all dark:text-slate-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-300"
          href={"/#ucretlendirme"}
        >
          Ücretlendirme
        </Link>
        <Menu as="div" className="relative block text-right">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition-all rounded-md group dark:text-slate-200 text-slate-600 hover:text-slate-700 dark:hover:text-slate-300">
              Daha Fazla
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-1 transition-all text-emerald-500 group-hover:text-emerald-400 dark:text-emerald-400 dark:group-hover:text-emerald-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-50"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right divide-y divide-green-700 rounded-md shadow-lg md:left-0 bg-green-50/95 backdrop-blur-sm ring-2 ring-green-500 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-white text-emerald-700 shadow-sm active:shadow-none"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2`}
                    >
                      {active ? (
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-4 transition-all"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 transition-all"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      )}
                      Akii ile iletişime geç
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-white text-emerald-700 shadow-sm active:shadow-none"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2`}
                    >
                      {active ? (
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-4 transition-all"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-2 transition-all"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      )}
                      Akii ile iletişime geç
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <h1 className="items-center justify-between my-6 space-x-4 text-5xl font-bold text-center transition-all lg:my-0 text-emerald-700 dark:text-emerald-100">
        Özgür
        <span className="relative inline-block text-transparent transition-all bg-gradient-to-tr bg-clip-text from-emerald-500 to-emerald-200 dark:from-green-200 via-emerald-500 dark:to-green-500">
          GPT
        </span>
      </h1>
      <div className="flex items-center justify-end xl:basis-1/3">
        <button
          className="flex items-center px-6 py-4 font-medium text-white transition-all xs:px-8 sm:px-12 bg-gradient-to-tr from-green-400 to-emerald-600 via-green-400 rounded-xl opacity-90 hover:opacity-100 ring ring-green-700 hover:ring-emerald-600 active:ring-1"
          href={"/"}
        >
          <span className="flex-1">Şimdi Ücretsiz Kullan</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="relative w-5 h-5 left-2 group-hover:left-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
