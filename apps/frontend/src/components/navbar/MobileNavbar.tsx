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
          <Accordion type="single" collapsible>
            {navbarShopMenue.map((item) => (
              <AccordionItem key={item.slug} value={item.slug}>
                <AccordionTrigger className="px-2 py-1 text-gray-700 data-[state=open]:text-primary-100 data-[state=open]:font-bold data-[state=open]:[&>svg]:text-primary-100 [&>svg]:size-7">
                  <Link href={`/shop/${item.slug}/دسته خر`}>{item.name}</Link>
                </AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis, reiciendis a, facilis hic quod mollitia amet
                      omnis dicta ad aliquam illum suscipit impedit fugit odit
                      dolor nihil necessitatibus nulla sequi!
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
