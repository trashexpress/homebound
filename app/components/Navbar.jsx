"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed top-0 left-0 w-full bg-white h-[80px] flex justify-between items-center px-4 border-b-2 border-black">
      <div className="z-10">
        <Image src={"/homeboundlogo.png"} width={200} height={100} alt="logo" />
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-3 scroll-smooth duration-1000">
        <Link to='beers' href={'#beers'}>
          Beers
        </Link>
        <Link to='menu' href={'#menu'} >Food</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* Hamburger Icons */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 hover:cursor-pointer"
      >
        {!nav ? <GiHamburgerMenu size={25} /> : <FaTimes size={25} />}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleClick}
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full bg-white h-screen flex flex-col justify-center items-center"
        }
      >
        <Link to='beers' className="py-6 text-4xl scroll-smooth duration-1000" href={"#beerlist"}>
          Beers
        </Link>
        <Link to='menu' className="py-6 text-4xl" href={"#menu"}>
          Food
        </Link>
        <Link className="py-6 text-4xl" href={""}>
          Contact
        </Link>
      </div>
      {/* Social Icons */}
    </div>
  );
};

export default Navbar;
