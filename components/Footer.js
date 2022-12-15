import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-black text-white pt-10">
      <div className="text-white w-screen bg-black flex flex-col space-y-4 lg:space-y-0 text-center lg:text-left lg:flex-row justify-evenly items-center lg:items-stretch">
        <Image
          onClick={() => router.push("/")}
          className="md:hover:scale-105 md:active:scale-95 duration-100 ease-out md:cursor-pointer"
          src={require("../assets/images/logo.png")}
          alt="logo"
        />
        <div className="space-y-2">
          <h1 className="text-xl font-bold">CONTACT US</h1>
          <div className="flex space-x-2">
            <AiOutlinePhone className="text-primary w-5 h-5" />
            <p>+91 9988776654</p>
          </div>
          <div className="flex space-x-2">
            <AiOutlineMail className="text-primary w-5 h-5" />
            <p>email@gmail.com</p>
          </div>
          <div className="flex space-x-2">
            <GoLocation className="text-primary w-5 h-5" />
            <p>Location</p>
          </div>
          <div className="flex space-x-2">
            <AiOutlineCalendar className="text-primary w-5 h-5" />
            <p>Sunday to Friday</p>
          </div>
        </div>
        <div className="space-y-2 hidden md:block">
          <h1 className="text-xl font-bold">OUR SERVICES</h1>
          <p>Service 1</p>
          <p>Service 2</p>
          <p>Service 3</p>
          <p>Service 4</p>
        </div>
        <div className="space-y-2 hidden md:block">
          <h1 className="text-xl font-bold">ABOUT US</h1>
          <p>About</p>
          <p>Blog</p>
          <p>Blog</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="w-[90%] rounded-md mx-auto h-1 bg-primary mt-5" />
      <div className="flex flex-col lg:flex-row text-center lg:text-left items-center space-y-2 lg:space-y-0 justify-evenly p-5">
        <p className="text-lg font-bold">
          © 2019, Sun Diagnostics Laboratory. All Rights Reserved. Reserved.
        </p>
        <div className="flex space-x-3">
          <AiOutlineInstagram className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
          <AiOutlineFacebook className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
          <AiOutlineTwitter className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
