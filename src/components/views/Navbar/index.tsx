"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import DropDown from "./subComponents/DropDown";
import Expand from "./subComponents/Expand";
import { useRouter } from "next/navigation";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = () => {
  const router = useRouter();
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchCalledFunc(e: any) {
    if (e.key === "Enter" && e.keyCode === 13) {
      router.push(`/search/${searchQuery}`);
    }
  }

  const cartValue = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );
  return (
    <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor z-50">
      <div className=" py-5 flex justify-between items-center space-x-12">
        <Link href={"/"}>
          <div className="w-36 flex-shrink-0">
            <Image src={"/Logo.webp"} width={500} height={500} alt="Logo" />
          </div>
        </Link>
        <div className="hidden lg:flex justify-between items-center w-full">
          <ul className="flex space-x-4 font-medium text-lg text-purple-950">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                className="flex items-center relative  rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group"
                key={index}
              >
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                    size={15}
                  />
                ) : (
                  ""
                )}

                {item.isDropDown && (
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="border flex items-center bg-white text-gray-600 px-3 rounded-md">
            <Link href={`/search/${searchQuery}`}>
              <BiSearch />
            </Link>
            <input
              type="text"
              value={searchQuery}
              onKeyDown={handleSearchCalledFunc}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:outline-none pl-1 pr-5 py-1 w-80 rounded-r-md"
              placeholder="Search in Our Store"
            />
          </div>

          <div className="flex-shrink-0 relative w-11 h-11 bg bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 absolute top-1 right-2 bg-red-400 text-xs Font-light rounded-full flex justify-center items-center">
              {cartValue}
            </div>
            <BsCart2 size={24} />
          </div>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setNavbarOpen(!isNavbarOpen)}
        >
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={29} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
};
export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-gray-100">
      {" "}
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return <Expand key={index} item={item} />;
      })}
    </div>
  );
};
