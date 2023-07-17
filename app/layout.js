"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { getCurrentScheme } from "@/app/utils/colorScheme";
import SwitchThemeButton from "./_components/SwitchThemeButton";
// eslint-disable-next-line @next/next/no-async-client-component
export default async function RootLayout({ children }) {
  const scheme = await getCurrentScheme();

  return (
    <html lang="tr" className={scheme === "dark" ? "dark" : ""}>
      <head />
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
