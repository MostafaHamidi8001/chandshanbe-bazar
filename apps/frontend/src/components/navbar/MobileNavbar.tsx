'use client'

import { cn } from "@/lib/utils"; // یا همون جایی که cn تعریف کردی
import React from 'react'
import { useMobileNavbar } from "@/hooks/store";
import { MdClose } from "react-icons/md";


const MobileNavbar = () => {
    const {isOpen, close} = useMobileNavbar()
  return (
    <div>
        <div
      className={cn(
        "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex justify-between items-center p-6 border-b">
        <div className="font-bold text-xl">منو</div>
        <button  onClick={close}>
          <MdClose />
        </button>
      </div>

      <nav className="flex flex-col gap-6 text-lg p-6">
        <a href="#home" onClick={close}>خانه</a>
        <a href="#about" onClick={close}>درباره</a>
        <a href="#contact" onClick={close}>تماس</a>
      </nav>
    </div>
    </div>
  )
}

export default MobileNavbar