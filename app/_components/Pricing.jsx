import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

const introHeaderVariants = {
  hide: {
    opacity: 0,
    x: -50,
    scale: 1.5,
    transformX: "120px",
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transformX: "500px",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      duration: 2,
    },
  },
};

const Pricing = () => {
  return (
    <div
      id="ucretlendirme"
      className="px-4 py-12 bg-black border-t-4 bg-gradient-to-br from-gray-900 to-slate-900/80 border-t-green-500"
    >
      <div className="max-w-4xl mx-auto">
        <div>
          <motion.h2
            initial="hide"
            id="yetenekler"
            whileInView="show"
            exit="hide"
            variants={introHeaderVariants}
            className="mx-auto my-6 text-4xl font-bold tracking-tight text-center text-transparent xs:text-5xl sm:text-6xl bg-clip-text bg-gradient-to-r from-green-50 via-emerald-100 to-green-500/50"
          >
            İstediğin ÖzgürGPT üyeliğini seç ve hemen başla!
          </motion.h2>
          <p className="max-w-xl mx-auto text-center text-slate-500">
            Daha beta aşamasında olan özellikleri ve özel üyelerimize
            sağlayacağımız özellikleri tek bir pakette topladık, işte ÖzgürGPT+
          </p>
        </div>
        <div className="flex flex-col items-center justify-start h-screen mt-10">
          <Tab.Group>
            <Tab.List
              className={
                "p-2 flex space-x-2 mb-16 bg-emerald-500/20 backdrop-blur rounded-xl justify-center items-center shadow-lg"
              }
            >
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`${
                      selected
                        ? "bg-emerald-700 text-white active:bg-opacity-80 shadow"
                        : " bg-transparent text-emerald-300 hover:bg-emerald-500/10 active:bg-green-600"
                    } flex items-center px-7 py-4 font-medium transition-all rounded-xl outline-none`}
                  >
                    <span>Ücretsiz</span>
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`${
                      selected
                        ? "bg-gradient-to-tr from-emerald-700 to-emerald-600 via-emerald-800 text-white active:bg-opacity-80 shadow-lg shadow-emerald-950"
                        : " bg-transparent text-emerald-300 hover:bg-emerald-500/10 active:bg-green-600"
                    } flex items-center px-7 py-4 font-medium transition-all rounded-xl outline-none`}
                  >
                    <span>ÖzgürGPT+</span>
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="max-w-sm p-6 duration-300 border border-gray-800 rounded-xl bg-gradient-to-b hover:border-emerald-800/50 from-slate-900 via-slate-900 to-slate-950/30 group/panel">
                <div className="flex">
                  <div className="px-3 py-2 text-xs transition-all border rounded-full shadow group-hover/panel:bg-green-600 group-hover/panel:border-green-500 group-hover/panel:text-white border-slate-700 text-slate-300 bg-slate-50/10">
                    Herkese İçin
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  <h3 className="text-4xl font-semibold text-slate-100">
                    Ücretsiz
                  </h3>
                  <p className="text-sm max-w-[18rem]  text-slate-400 text-opacity-80">
                    Standart ÖzgürGPT paketidir ve tamamen ücretsizdir.
                  </p>
                </div>

                <div className="p-2">
                  <div className="flex">
                    <div className=""></div>
                  </div>
                </div>
                <div className="w-full h-[1px] my-6 bg-slate-800 drop-shadow shadow"></div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-green-300/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm tracking-tight text-slate-400">
                      Lorem, ipsum dolor.
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-green-300/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm tracking-tight text-slate-400">
                      Lorem, ipsum dolor.
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-green-300/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm tracking-tight text-slate-400">
                      Lorem, ipsum dolor.
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-green-300/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm tracking-tight text-slate-400">
                      Lorem, ipsum dolor.
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 stroke-green-300/70"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm tracking-tight text-slate-400">
                      Lorem, ipsum dolor.
                    </span>
                  </div>
                </div>
                <button className="flex items-center justify-between w-full px-6 py-3 mt-8 text-green-200 transition-all border shadow rounded-xl group active:text-green-100 hover:text-green-50 hover:bg-green-800/20 bg-slate-800/80 hover:border-green-700 active:ring ring-slate-800 active:ring-green-500/20 border-slate-700/60 hover:bg-slate-800">
                  <span className="flex-1 text-sm transition-all">
                    Ücretsiz Kullanın
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative left-0 w-5 h-5 transition-all group-hover:left-2 stroke-green-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </Tab.Panel>
              <Tab.Panel className="p-1.5 rounded-xl bg-gradient-to-tr from-emerald-400 via-green-700 to-emerald-500">
                <div className="max-w-sm p-6 duration-300 bg-black border border-transparent rounded-xl bg-gradient-to-t hover:border-emerald-800/50 from-slate-500/5 via-slate-500/10 to-green-950/80 group/panel">
                  <div className="flex">
                    <div className="px-6 py-2 text-xs text-white transition-all border border-green-500 rounded-full shadow bg-gradient-to-r from-green-500 via-green-700 to-emerald-600">
                      Premium
                    </div>
                  </div>
                  <div className="mt-8 space-y-3">
                    <h3 className="text-5xl font-semibold tracking-tight text-transparent bg-gradient-to-tr bg-clip-text from-green-500 via-emerald-50 to-emerald-200">
                      125₺ <span className="text-sm text-slate- ">/</span>{" "}
                      <sub className="text-sm font-normal tracking-tighter text-green-200/70">
                        30 gün
                      </sub>
                    </h3>
                    <p className="text-sm max-w-[18rem]  text-slate-400 text-opacity-80">
                      Daha fazla <span className="font-semibold">özellik</span>{" "}
                      ve daha fazla{" "}
                      <span className="font-semibold">özgürlük</span> ile{" "}
                      <span className="text-emerald-500">ÖzgürGPT+</span>{" "}
                      deneyimini özgürce yaşayın.
                    </p>
                  </div>

                  <div className="p-2">
                    <div className="flex">
                      <div className=""></div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] my-6 bg-slate-800 drop-shadow shadow"></div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 stroke-green-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                      </svg>
                      <span className="text-sm font-medium tracking-tight text-slate-400">
                        Lorem, ipsum dolor.
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center justify-between w-full px-6 py-3 mt-8 text-green-200 transition-all border shadow rounded-xl group active:text-green-100 hover:text-green-50 hover:bg-green-800/20 bg-slate-800/80 hover:border-green-700 active:ring ring-slate-800 active:ring-green-500/20 border-slate-700/60 hover:bg-slate-800">
                    <span className="flex-1 text-sm transition-all">
                      ÖzgürGPT+ Satın Al
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="relative left-0 w-5 h-5 transition-all group-hover:left-2 stroke-green-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
