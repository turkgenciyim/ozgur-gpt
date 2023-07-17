import React from "react";
import Circles from "@/app/_assets/Circles";
import DiscordInviter from "@/app/_assets/DiscordInviter";
import HeaderSlogan from "@/app/_assets/HeaderSlogan";
import Navigation from "@/app/_layout/Navigation";
const Header = () => {
  return (
    <header className="relative transition-all bg-gradient-to-tr dark:from-slate-950 dark:via-emerald-900 dark:to-slate-950 from-slate-50 to-emerald-50">
      <Navigation />
      <HeaderSlogan />
      <DiscordInviter />
      <Circles />
    </header>
  );
};

export default Header;
