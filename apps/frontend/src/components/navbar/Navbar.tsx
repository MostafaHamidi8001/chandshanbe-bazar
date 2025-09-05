import Link from "next/link";
import React, { JSX } from "react";
import {
  FaCameraRetro,
  FaHeadphones,
  FaKitchenSet,
  FaMobileScreen,
  FaMusic,
  FaUserDoctor,
} from "react-icons/fa6";
import {
  GiMonclerJacket,
  GiAmpleDress,
  GiLaptop,
  GiEarbuds,
} from "react-icons/gi";
import { FaCar, FaBlogger } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { NavbarProps } from "../header/Header";
import { defaltAnimationHeaderStyle } from "@/utils/styles";
import { MdCable, MdSpeakerGroup } from "react-icons/md";
import { BsEarbuds } from "react-icons/bs";

export const navbaerIconsMenue: Record<string, JSX.Element> = {
  women: <GiAmpleDress />,
  men: <GiMonclerJacket />,
  "home-appliances": <FaKitchenSet />,
  "digital-products": <GiLaptop />,
  semantic: <FaUserDoctor />,
  "car-accessories": <FaCar />,
  articles: <GrArticle />,
  blog: <FaBlogger />,
  phone: <FaMobileScreen />,
  "cabl-charger": <MdCable />,
  "phone-holder": <FaCameraRetro />,
  audio: <FaMusic />,
  speaker: <MdSpeakerGroup />,
  headphone: <FaHeadphones />,
  airpod: <BsEarbuds />,
  headset: <GiEarbuds />,
} as const;

const Navbar = ({ navbarShopMenue }: NavbarProps) => {
  return (
    <nav className="w-full max-w-[1200px] hidden lg:block my-10">
      <ul className="flex justify-between items-center">
        {navbarShopMenue.map((item) => (
          <li key={item.slug} className="relative group">
            <Link
              className={
                defaltAnimationHeaderStyle +
                "flex items-center justify-center gap-1.5"
              }
              href={`/shop/${item.slug}`}
            >
              <span>{item.name}</span>
              <span className="px-1.5">{navbaerIconsMenue[item.slug]}</span>
            </Link>

            {item.menu && item.menu.length > 0 && (
              <ol className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-2 transition-all duration-300">
                {item.menu.map((menuItem) => (
                  <li
                    key={menuItem.category}
                    className="border-b last:border-0"
                  >
                    <Link
                      className={
                        defaltAnimationHeaderStyle +
                        " flex items-center justify-between gap-1.5 text-base font-semibold px-3 py-2"
                      }
                      href={`/shop/${item.slug}/${menuItem.slug}`}
                    >
                      <span>{menuItem.category}</span>
                      <i className="px-1.5">
                        {navbaerIconsMenue[menuItem.slug]}
                      </i>
                    </Link>

                    {menuItem.subMenu && menuItem.subMenu.length > 0 && (
                      <ul className="pl-4">
                        {menuItem.subMenu.map((subItem) => (
                          <li key={subItem.slug}>
                            <Link
                              className={
                                defaltAnimationHeaderStyle +
                                " flex items-center justify-between gap-1.5 text-sm px-3 py-1"
                              }
                              href={`/shop/${item.slug}/${menuItem.slug}/${subItem.slug}`}
                            >
                              <span>{subItem.title}</span>
                              <i className="px-1.5">
                                {navbaerIconsMenue[subItem.slug]}
                              </i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
