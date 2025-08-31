import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  IoPersonOutline,
  IoHeartOutline,
} from "react-icons/io5";
import SearchBar from "./SearchBar";
import SearchToggle from "./SearchToggle";
import MobileSearchBar from "./MobileSearchBar";

const headerLinks = [
  {
    name: "حساب کابری",
    icon: <IoPersonOutline />,
  },
  {
    name: "مورد علاقه شما",
    icon: <IoHeartOutline />,
  },
  {
    name: "سبد خرید",
    icon: <FiShoppingCart />,
  },
];

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center ">
      <section className="w-full max-w-[1600px] flex justify-between items-center px-2.5 py-14 h-20 border-b-[2px] border-primary-50">
        <Link href="/" className="text-3xl font-bold">
          <span className="text-primary-100">چندشنبه </span>
          <span className="text-primary-300">بازار</span>
        </Link>
        <div className="hidden lg:block">
          <SearchBar />
        </div>
        <ul className="flex">
          <li className="relative mx-2 border-0 lg:hidden pb-2
               overflow-hidden 
               before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 
               before:bg-primary-100 before:transition-all before:duration-500
               hover:before:w-full
               hover:text-primary-100 duration-500 ">
            <SearchToggle />
          </li>
          {headerLinks.map((item) => (
            <li
              key={item.name}
              className="relative mx-2 border-0 pb-2
               overflow-hidden 
               before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 
               before:bg-primary-100 before:transition-all before:duration-500
               hover:before:w-full
               hover:text-primary-100 duration-500
               "
            >
              <Link
                className="size-full font-bold flex justify-center items-center"
                href="/"
              >
                <span className="hidden lg:block">{item.name}</span>
                <span className="px-1.5 text-lg">{item.icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <MobileSearchBar />
      <nav className=""></nav>
    </header>
  );
};

export default Header;
