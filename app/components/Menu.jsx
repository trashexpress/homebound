import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";

const montBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const montRegular = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

const Menu = ({ foodimage, description }) => {
  return (
    <div className="flex">
      <div>
        <Image src={foodimage} width={100} height={100} alt="garlicshrimp" />
      </div>
      <div className="pl-4">
        <h1 className={`${montRegular} uppercase font-bold`}>{description}</h1>
      </div>
    </div>
  );
};

export default Menu;
