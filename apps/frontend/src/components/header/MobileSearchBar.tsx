"use client";
import { useSearchStore } from "@/hooks/store";
import SearchBar from "./SearchBar";

const MobileSearchBar = () => {
  const { open } = useSearchStore();
  return (
    <div
      className={`overflow-hidden transition-all duration-700 ease-in-out bg-primary-50 flex items-center justify-center h-24 w-full ${
        open
          ? "max-h-20 opacity-100 translate-y-0 mt-4 lg:hidden"
          : "max-h-0 opacity-0 -translate-y-5 lg:hidden"
      }`}
    >
      <SearchBar />
    </div>
  );
};

export default MobileSearchBar;
