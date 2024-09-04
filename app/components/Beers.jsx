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
const Beers = ({beercan, beerglass, title, description, abv}) => {
  return (
    <div>
      <div className="flex flex-col border-b-2 border-black pb-6 md:flex-row ">
        <div className="flex mx-auto pb-5 ">
          <div className="my-auto pr-2">
            <Image
              className=""
              src={beercan}
              width={100}
              height={0}
              alt="canstrip.png"
            />
          </div>
          <div className="my-auto pr-2">
            <Image
              src={"/tulipglass.png"}
              width={100}
              height={0}
              alt="tulipglass"
            />
          </div>
        </div>

        <div className="w-96">
          <div className={montBold.className}>
            <h1 className="pl-4 pb-4 font-bold text-lg uppercase">
              {title}
            </h1>
          </div>
          <div className={montRegular.className}>
            <h1 className="px-4 pb-2 md:pl-6">
              {description}
            </h1>
          </div>
          <div className={montRegular.className}>
            <h1>
              <span className="font-bold pl-4 pr-1 md:pl-6">Abv:</span> 7%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beers;
