"use client";
import { useMobileNavbar } from "@/hooks/store";
import { IoMenu } from "react-icons/io5";

const NavbarToggle = () => {
    const {toggle} = useMobileNavbar()
  return (
    <div className="lg:hidden">
      <button
        className="size-full flex justify-center items-center text-xl cursor-pointer"
        onClick={toggle}
      >
        <IoMenu />
      </button>
    </div>
  );
};

export default NavbarToggle;
