import * as React from "react";
import { IconButton } from "@mui/material";
import HamburgerIcon from "../public/assets/hamburger-menu.svg";
import SearchIcon from "../public/assets/search-icon.svg";
import { IoIosCall } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";

export default function Navbar() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #00DCC9 -61.54%, rgba(0, 220, 201, 0) 142.09%)",
      }}
      className="flex items-center justify-between px-5 lg:px-20"
    >
      <div>
        <img src="./assets/logo.svg" className="w-1/2" alt="logo" />
      </div>
      <div className="flex items-center space-x-10">
        {/* Mail Id */}
        <div className="items-center space-x-2 hidden lg:inline-flex">
          <BiMailSend className="w-10 h-10" />
          <p className="italic">info@sundiagnosticslaboratory.in</p>
        </div>
        {/* Contact Us */}
        <div className="space-x-2 items-center hidden lg:inline-flex">
          <div className="flex flex-col text-right">
            <p className="italic">Contact Us!</p>
            <h2 className="font-bold text-xl">+123-4567-890</h2>
          </div>
          <IoIosCall className="w-10 h-10" />
        </div>
        {/* Input Box */}
        <div
          style={{
            background:
              "linear-gradient(180deg, #6CEBE0 0%, rgba(13, 155, 251, 0) 175%)",
          }}
          className="hidden lg:inline-flex border shadow-sm border-black px-2 py-1 items-center justify-center rounded-full"
        >
          <input
            className="px-5 py-2 bg-transparent outline-none flex-1 placeholder-black font-bold"
            placeholder="Search..."
            type="search"
          />
          <SearchIcon className="mr-4" />
        </div>
        {/* HamburgerMenu */}
        <IconButton style={{ color: "black", padding: "1rem" }}>
          <HamburgerIcon height={25} width={25} />
        </IconButton>
      </div>
    </div>
  );
}
