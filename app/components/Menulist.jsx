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
      <Menu foodimage={"/food/burger.jpg"} description="Cheese Burger" />
      <Menu foodimage={"/food/garlicshrimp.jpg"} description="Garlic Shrimp" />
      <Menu foodimage={"/food/bruschetta.jpg"} description="Bruschetta" />
    </div>
  );
};

export default Menulist;
