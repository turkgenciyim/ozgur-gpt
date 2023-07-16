import Image from "next/image";
import React from "react";

const DiscordInviter = () => {
  return (
    <div className="hidden xs:block absolute ring ring-emerald-500 hover:ring-green-600 transition-all p-4 rounded-md right-4 bottom-4 bg-gradient-to-tr from-green-100/90 via-green-50 to-emerald-200 backdrop-blur-xl w-[25rem]">
      <div className="flex justify-between mb-4">
        <div className="flex items-center justify-center space-x-2 font-medium">
          <div className="p-1 bg-blue-500 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="w-6 h-6 transition-all duration-300 fill-white  group-hover:rotate-[360deg] group-hover:fill-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
            </svg>
          </div>
          <p>Discord</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex space-x-4">
        <div className="relative w-20 h-20 overflow-hidden rounded-lg shadow">
          <Image fill src="/discord.png" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col flex-1 tracking-tight">
          <h3 className="font-semibold text-green-800">
            ÖzgürGPT Sunucusuna davetlisin!
          </h3>
          <p className="max-w-xs text-sm tracking-tight text-slate-600">
            Yardıma mı ihtiyacın var? ÖzgürGPT ile ilgili soruların mı var?
            <span className="font-medium"> sunucumuza katıl!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscordInviter;
