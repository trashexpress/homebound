import React from "react";
import Menu from "./Menu";
import { Montserrat } from "next/font/google";

const montBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const montRegular = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const Menulist = () => {
  return (
    <div
      name="menu"
      id="menu"
      className="flex flex-col gap-10 mt-8 mx-auto px-4"
    >
      <h1 className={`${montBold} font-bold text-4xl text-center`}>MENU</h1>
      <Menu />
      <Menu />

      <Menu />

      <Menu />
    </div>
  );
};

export default Menulist;
