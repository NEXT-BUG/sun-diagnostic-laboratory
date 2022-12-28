import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-secondary text-white pt-10">
      <div className="text-white w-screen flex flex-col space-y-4 lg:space-y-0 text-left lg:flex-row justify-between px-20 items-center lg:items-center">
        <div className="flex flex-col items-center">
          <Image
            onClick={() => router.push("/")}
            className="md:hover:scale-105 w-64 md:active:scale-95 duration-100 ease-out md:cursor-pointer"
            src={require("../assets/images/logo.png")}
            alt="logo"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="flex space-x-2">
            <TbPhoneCall className="text-primary w-5 h-5" />
            <div className="flex flex-col space-y-1">
              <h1 className="font-semibold text-sm">+91 86123 16078</h1>
              <h1 className="font-semibold text-sm">+91 90309 31931</h1>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <AiOutlineMail className="text-primary w-5 h-5" />
            <a
              className="text-sm font-bold md:hover:text-primary"
              href="mailto:info@sundaignosticslaboratory.in"
            >
              info@sundaignosticslaboratory.in
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg font-bold">Location</h1>
          <div className="flex space-x-2">
            <GoLocation className="text-primary w-5 h-5" />
            <div className="flex flex-col space-y-1">
              <div className="">
                <h1 className="font-semibold text-neutral-300 text-xs">
                  Main Branch:
                </h1>
                <p className="font-bold text-sm">Ramamurthy Nagar, Nellore</p>
              </div>
              <div>
                <h1 className="font-semibold text-neutral-300 text-xs">
                  Other Branch:
                </h1>
                <p className="font-bold text-sm no-wrap">
                  Pogathota - Nellore, Gudur, Kavali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] rounded-md mx-auto h-1 bg-primary mt-5" />
      <div className="flex flex-col lg:flex-row text-center lg:text-left items-center space-y-2 lg:space-y-0 justify-evenly p-5">
        <div className="flex flex-col-reverse md:flex-col">
          <p className="text-lg font-bold">
            © 2019, Sun Diagnostics Laboratory. All Rights Reserved. Reserved.
          </p>
          <p className="text-white text-xs">
            Developed By{" "}
            <span
              onClick={() =>
                router.push("https://www.instagram.com/condottiereconsultancy/")
              }
              className="text-primary md:hover:text-[#00afa0] font-bold md:cursor-pointer"
            >
              Condottiere
            </span>{" "}
            Consultancy Services
          </p>
        </div>
        <div className="flex space-x-3">
          <AiOutlineInstagram
            onClick={() =>
              router.push(
                "https://instagram.com/sun_diagnosticlabs?igshid=YmMyMTA2M2Y="
              )
            }
            className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary"
          />
          <AiOutlineFacebook className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
          <AiOutlineTwitter className="md:hover:scale-75 md:cursor-pointer duration-300 ease-out w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
