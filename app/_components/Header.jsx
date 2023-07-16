import React from "react";
import Circles from "@/app/_assets/Circles";
import DiscordInviter from "@/app/_assets/DiscordInviter";
import HeaderSlogan from "@/app/_assets/HeaderSlogan";
import Navigation from "@/app/_layout/Navigation";
const Header = () => {
  return (
    <header className="relative bg-gradient-to-tr from-slate-950 to-green-950 via-emerald-950">
      <Navigation />
      <HeaderSlogan />
      <DiscordInviter />
      <Circles />
    </header>
  );
};

export default Header;
