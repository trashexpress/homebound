import Beerlist from "./components/Beerlist";
import { Montserrat } from "next/font/google";
import Menulist from "./components/Menulist";

const montBold = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

const montRegular = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="name='beers' id='beerlist' pt-[120px]">
      <div className="flex flex-col mx-auto items-center text-center uppercase">
        <div className={montBold.className}>
          <h1 className="font-bold text-2xl pb-2">Whats new at Homebound</h1>
        </div>
        <div className="px-4 mb-4 pb-4">
          <h1 className={montRegular.className}>
            Available at the Brewery - On Tap & Cans to go
          </h1>
        </div>
      </div>
      <div className="">
        <Beerlist />
      </div>
      <Menulist />
    </div>
  );
}
