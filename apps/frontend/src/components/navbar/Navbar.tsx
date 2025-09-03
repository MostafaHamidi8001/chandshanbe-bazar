import Link from "next/link";
import React, { JSX } from "react";
import { FaCameraRetro, FaHeadphones, FaKitchenSet, FaMobileScreen, FaUserDoctor } from "react-icons/fa6";
import { GiMonclerJacket, GiAmpleDress, GiLaptop } from "react-icons/gi";
import { FaCar, FaBlogger } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { NavbarProps } from "../header/Header";
import { defaltAnimationHeaderStyle } from "@/utils/styles";
import { MdSpeakerGroup } from "react-icons/md";

const navbaerIconsMenue: Record<string, JSX.Element> = {
  women: <GiAmpleDress />,
  men: <GiMonclerJacket />,
  "home-appliances": <FaKitchenSet />,
  "digital-products": <GiLaptop />,
  semantic: <FaUserDoctor />,
  "car-accessories": <FaCar />,
  articles: <GrArticle />,
  blog: <FaBlogger />,
  mobile: <FaMobileScreen />,
  camera: <FaCameraRetro />,
  audio: <FaHeadphones />,
  speaker: <MdSpeakerGroup />
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
              href={`/shop/${item.slug}/kitchen`}
            >
              <span>{item.name}</span>
              <span className="px-1.5">{navbaerIconsMenue[item.slug]}</span>
            </Link>
            <ol
              className="
              absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transform group-hover:translate-y-2 transition-all duration-300"
            >
              {item.menue &&
                item.menue.map((item) => (
                  <li
                    key={item.slug}>
                    <Link
                      className={
                        defaltAnimationHeaderStyle +
                        "flex items-center justify-center gap-1.5"
                      }
                      href={`/shop/${item.slug}/kitchen`}
                    >
                      <span>{item.name}</span>
                      <span className="px-1.5">
                        {navbaerIconsMenue[item.slug]}
                      </span>
                    </Link>
                  </li>
                ))}
            </ol>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
