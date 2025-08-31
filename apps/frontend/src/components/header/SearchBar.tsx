'use client'
import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div
      className="w-[400px] h-14 relative shadow-lg"
    >
      <input
        type="search"
        placeholder="محصولی که میخوای رو جستجو کن ..."
        className="size-full px-4 py-2 pl-10 text-sm border border-gray-200 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
      <button className="absolute w-14 rounded-s-md inset-y-0 left-0 flex items-center justify-center cursor-pointer bg-primary-100 text-white text-2xl font-bold">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default SearchBar;
