import Link from "next/link";
import React, { JSX } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import { GiAmpleDress } from "react-icons/gi";
import { GiMonclerJacket } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { client } from "../../../sanity.client";
import { navbarQuery } from "@/utils/sanity/sanityQueries";

interface NavbaerItemsType {
  name: string;
  slug: string;
  menue: { name: string; slug: string }[];
}

const navbaerIconsMenue: Record<string, JSX.Element> = {
  women: <GiAmpleDress />,
  men: <GiMonclerJacket />,
  "home-appliances": <FaKitchenSet />,
  "digital-products": <GiLaptop />,
  cosmetics: <GiLipstick />,
  "car-accessories": <FaCar />,
} as const;

const Navbar = async () => {
  const navbarShopMenue: NavbaerItemsType[] = await client.fetch(navbarQuery);
  return (
    <nav className="w-full max-w-[1200px] hidden lg:block my-10">
      <ul className="flex justify-between items-center">
        {navbarShopMenue.map((item) => (
          <li className="relative group" key={item.name}>
            <Link
              className="flex justify-center items-center overflow-hidden relative pb-2
               before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 
               before:bg-primary-100 before:transition-all before:duration-500
               hover:before:w-full
               hover:text-primary-100 duration-500 "
              href={item.slug}
            >
              <span>{item.name}</span>
              <span className="px-1.5">{navbaerIconsMenue[item.slug]}</span>
            </Link>
            <ol
              className="
              absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transform group-hover:translate-y-2 transition-all duration-300
            "
            >
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Kitchen
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Beauty Care
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Electronics
              </li>
            </ol>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
