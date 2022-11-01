import React from "react";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-screen h-screen pt-10 bg-slate-100">
      <div className="mx-auto text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold">Contact US</h1>
          <p className="text-sm text-gray-500 font-semibold">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="flex w-2/3 mx-auto bg-white mt-20 p-2 rounded-lg shadow-sm">
          <div className="bg-primary text-left p-10 h-96 rounded-lg flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Contact Information</h1>
              <p className="text-sm font-light">
                Say something to start a live chat!
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <MdPhoneInTalk />
                <p className="font-light text-sm">898328749</p>
              </div>
              <div className="flex items-center space-x-4">
                <IoMdMail />
                <p className="font-light text-sm">demo@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MdLocationOn />
                <p className="font-light text-sm">Address</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-black p-2 rounded-full md:hover:scale-75 md:cursor-pointer duration-300 ease-out">
                <BsTwitter className="text-white" />
              </div>
              <div className="bg-black p-2 rounded-full md:hover:scale-75 md:cursor-pointer duration-300 ease-out">
                <BsInstagram className="text-white" />
              </div>
              <div className="bg-black p-2 rounded-full md:hover:scale-75 md:cursor-pointer duration-300 ease-out">
                <FaDiscord className="text-white" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
