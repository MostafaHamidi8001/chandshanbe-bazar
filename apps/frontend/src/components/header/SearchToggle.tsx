'use client'
import { useSearchStore } from "@/hooks/store";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchToggle = () => {
  const { toggle } = useSearchStore()
  return (
    <button
      className="size-full flex justify-center items-center text-xl cursor-pointer lg:hidden"
      onClick={toggle}
    >
      <IoSearchOutline />
    </button>
  );
};

export default SearchToggle;
