"use client";

import { cn } from "@/lib/utils"; // یا همون جایی که cn تعریف کردی
import React from "react";
import { useMobileNavbar } from "@/hooks/store";
import { MdClose } from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavbarProps } from "../header/Header";
import Link from "next/link";
import { defaltAnimationHeaderStyle } from "@/utils/styles";
import { navbaerIconsMenue } from "./Navbar";

const MobileNavbar = ({ navbarShopMenue }: NavbarProps) => {
  const { isOpen, close } = useMobileNavbar();
  return (
    <div>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-default/50 transform transition-transform duration-300 ease-in-out text-default flex justify-center items-center flex-col lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex w-full justify-end items-center px-6 my-2 ">
          <button
            className="cursor-pointer text-3xl text-white"
            onClick={close}
          >
            <MdClose />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg p-6 size-[90%] bg-white rounded-xl">
          {/* <Accordion type="single" collapsible className="w-full">
            {navbarShopMenue.map((item) => (
              <AccordionItem key={item.slug} value={item.slug}>
                <AccordionTrigger>
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href={`/shop/${item.slug}`}
                      className={
                        defaltAnimationHeaderStyle +
                        " flex items-center gap-1.5"
                      }
                    >
                      <span>{item.name}</span>
                      <span className="px-1.5">
                        {navbaerIconsMenue[item.slug]}
                      </span>
                    </Link>
                  </div>
                </AccordionTrigger>

                {item.menu && item.menu.length > 0 && (
                  <AccordionContent>
                    <Accordion type="single" collapsible className="pl-4">
                      {item.menu.map((menuItem) => (
                        <AccordionItem
                          key={menuItem.slug}
                          value={menuItem.slug}
                        >
                          <AccordionTrigger>
                            <div className="flex items-center justify-between w-full">
                              <Link
                                href={`/shop/${item.slug}/${menuItem.slug}`}
                                className={
                                  defaltAnimationHeaderStyle +
                                  " flex items-center gap-1.5 text-base font-semibold"
                                }
                              >
                                <span>{menuItem.category}</span>
                                <i className="px-1.5">
                                  {navbaerIconsMenue[menuItem.slug]}
                                </i>
                              </Link>
                            </div>
                          </AccordionTrigger>

                          {menuItem.subMenu && menuItem.subMenu.length > 0 && (
                            <AccordionContent>
                              <ul className="pl-4">
                                {menuItem.subMenu.map((subItem) => (
                                  <li key={subItem.slug}>
                                    <Link
                                      href={`/shop/${item.slug}/${menuItem.slug}/${subItem.slug}`}
                                      className={
                                        defaltAnimationHeaderStyle +
                                        " flex items-center justify-between gap-1.5 text-sm py-1"
                                      }
                                    >
                                      <span>{subItem.title}</span>
                                      <i className="px-1.5">
                                        {navbaerIconsMenue[subItem.slug]}
                                      </i>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion> */}
          <Accordion type="single" collapsible>
            {navbarShopMenue.map(
              (item) => (
                <AccordionItem
                  className="[&>svg]:cursor-pointer"
                  key={item.slug}
                  value={item.slug}
                >
                  <AccordionTrigger className="[&>svg]:size-7 data-[state=open]:text-primary-300 data-[state=open]:font-extrabold data-[state=open]:[&>svg]:text-primary-300 data-[state=open]:[&>svg]:font-extrabold  ">
                    <Link
                      onClick={close}
                      href={`/shop/${item.slug}`}
                      className={
                        defaltAnimationHeaderStyle + "flex items-center gap-2.5"
                      }
                    >
                      <span>{item.name}</span>
                      <i>{navbaerIconsMenue[item.slug]}</i>
                    </Link>
                  </AccordionTrigger>
                  {item.menu && item.menu.length > 0 && (
                    <AccordionContent>
                      {item.menu.map((menuItem) => (
                        <Accordion
                          key={menuItem.slug}
                          type="single"
                          collapsible
                        >
                          <AccordionItem value={menuItem.slug}>
                            <AccordionTrigger className="[&>svg]:size-5 data-[state=open]:text-primary-100 data-[state=open]:font-bold data-[state=open]:[&>svg]:text-primary-100 data-[state=open]:[&>svg]:font-bold   ">
                              <Link
                                onClick={close}
                                href={`/shop/${item.slug}/${menuItem.slug}`}
                                className={
                                  defaltAnimationHeaderStyle +
                                  "flex items-center gap-2.5"
                                }
                              >
                                <span>{menuItem.category}</span>
                                <i>{navbaerIconsMenue[menuItem.slug]}</i>
                              </Link>
                            </AccordionTrigger>
                            {menuItem.subMenu &&
                              menuItem.subMenu.length > 0 && (
                                <AccordionContent>
                                  <ul>
                                    {menuItem.subMenu.map((subMenuItem) => (
                                      <li className="w-fit" key={subMenuItem.slug}>
                                        <Link
                                          onClick={close}
                                          href={`/shop/${item.slug}/${menuItem.slug}/${subMenuItem.slug}`}
                                          className={
                                            defaltAnimationHeaderStyle +
                                            "flex items-center gap-2.5 py-2"
                                          }
                                        >
                                          <span>{subMenuItem.title}</span>
                                          <i>
                                            {
                                              navbaerIconsMenue[
                                                subMenuItem.slug
                                              ]
                                            }
                                          </i>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              )}
                          </AccordionItem>
                        </Accordion>
                      ))}
                    </AccordionContent>
                  )}
                </AccordionItem>
                
              )

              // <AccordionItem key={item.slug} value={item.slug}>
              //   <AccordionTrigger className="px-2 py-1 text-gray-700 data-[state=open]:text-primary-100 data-[state=open]:font-bold data-[state=open]:[&>svg]:text-primary-100 [&>svg]:size-7">
              //     <Link href={`/shop/${item.slug}/دسته خر`}>{item.name}</Link>
              //   </AccordionTrigger>
              //   <AccordionContent>
              //     <ul>
              //       <li>
              //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
              //         Officiis, reiciendis a, facilis hic quod mollitia amet
              //         omnis dicta ad aliquam illum suscipit impedit fugit odit
              //         dolor nihil necessitatibus nulla sequi!
              //       </li>
              //     </ul>
              //   </AccordionContent>
              // </AccordionItem>
            )}
          </Accordion>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
