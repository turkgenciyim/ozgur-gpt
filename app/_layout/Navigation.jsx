import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";

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
    <nav className="relative z-40 flex flex-col flex-wrap items-center justify-between flex-1 w-full px-6 py-4 mx-auto space-x-4 sm:py-12 xl:px-8 lg:gap-0 lg:flex-row backdrop-blur-sm">
      <div className="items-center justify-center hidden space-x-12 text-white sm:flex xl:basis-1/3">
        <Link
          className="transition-all text-slate-200 hover:text-slate-300"
          href={"/"}
        >
          Nasıl Kullanılır?
        </Link>
        <Link
          className="transition-all text-slate-200 hover:text-slate-300"
          href={"/#ucretlendirme"}
        >
          Ücretlendirme
        </Link>
        <Menu as="div" className="relative block text-right">
          <div>
            <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium transition-all rounded-md text-slate-200 hover:text-slate-300">
              Yaratıcılar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
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
            <Menu.Items className="absolute right-0 z-20 w-56 mt-2 origin-top-right divide-y divide-green-300 rounded-md shadow-lg md:left-0 bg-green-50/95 backdrop-blur-sm ring-2 ring-green-500 focus:outline-none">
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
      
      <h1 className="items-center justify-between my-6 space-x-4 text-5xl font-bold text-center lg:my-0 text-emerald-100">
        Özgür
        <span className="relative inline-block text-transparent bg-gradient-to-tr bg-clip-text from-green-50 via-emerald-500 to-green-300">
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
            className="relative w-5 h-5 transition-all left-2 group-hover:left-4"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1, ease: "easeInOut" },
                fill: { duration: 3, ease: [5, 5, 0.8, 1] },
              }}
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
