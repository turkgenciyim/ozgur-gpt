import { motion } from "framer-motion";
import React from "react";

const HeaderSlogan = () => {
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
    <div className="relative flex flex-col items-center justify-center max-w-4xl p-4 mx-auto lg:mt-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tighter text-center text-emerald-800 dark:text-white xs:text-5xl sm:text-6xl to-emerald md:text-7xl lg:text-8xl">
        <motion.span
          initial={{ filter: "blur(4px)", opacity: 0.7 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative inline-block before:bg-gradient-to-tr transition-all duration-700 from-emerald-700 dark:before:from-emerald-500/50 before:backdrop-blur-sm before:h-1/4 before:bottom-0 before:absolute before:w-full
              to-green-600/20 dark:before:to-green-500/20 rounded-3xl before:from-20%"
        >
          Özgürlüğünüzü
        </motion.span>{" "}
        kısıtlamak yerine onu özgür bırakın!
      </h1>
      <p className="max-w-md mx-auto text-sm font-medium text-center transition-all xs:text-base sm:max-w-xl md:max-w-2xl md:text-xl text-slate-600 dark:text-slate-100">
        OpenAI tarafından sunulan GPT-4 yapay zeka teknolojisini kullanan
        ÖzgürGPT şimdi daha fazla özelliğe sahip, hadi sende bunlara göz at!
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 px-6 mb-12 mt-9 xs:mb-44">
        <button className="py-4 font-medium transition-all duration-500 px-7 xs:px-12 bg-gradient-to-tr from-green-100 to-emerald-200 via-white rounded-xl opacity-90 hover:opacity-100 ring ring-green-700 hover:ring-emerald-600 active:ring-1">
          ÖzgürGPT+ Satın Alın
        </button>
        <button className="flex items-center space-x-2 font-medium transition-800 text-slate-800 dark:text-white group opacity-80 hover:opacity-100">
          <span>Şimdi Özellikleri Keşfet</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 transition-all group-hover:scale-125 group-hover:fill-white"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={icon}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 1, ease: "easeInOut" },
                fill: { duration: 3, ease: [5, 5, 0.8, 1] },
              }}
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeaderSlogan;
