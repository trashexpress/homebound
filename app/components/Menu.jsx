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

const Menu = () => {
  return (
    <div className="flex">
      <div>
        <Image
          src={"/food/garlicshrimp.png"}
          width={100}
          height={100}
          alt="garlicshrimp"
        />
      </div>
      <div>
        <h1>Garlic Shrimp</h1>
      </div>
    </div>
  );
};

export default Menu;
