import React, { useState } from "react";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import { FormControlLabel, RadioGroup } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { Input, RadioStyle, SendButton } from "../components/styledMUI";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  return (
    <div className="w-screen h-full py-10 bg-slate-100">
      <Head>
        <title>SDL | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto text-center p-5 lg:p-0">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold">Contact US</h1>
          <p className="text-sm text-gray-500 font-semibold">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full lg:w-2/3 lg:mx-auto bg-white mt-20 p-2 rounded-lg shadow-sm">
          <div className="bg-primary w-full text-left md:w-64 lg:w-[30rem] p-10 h-96 md:h-[30rem] rounded-lg flex flex-col justify-between">
            <div className="space-y-2">
              <h1 className="text-xl font-bold">Contact Information</h1>
              <p className="text-sm font-light">
                Say something to start a live chat!
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <MdPhoneInTalk />
                <p className="font-light text-sm">
                  +91 86123 16078
                  <br />
                  +91 90309 31931
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <IoMdMail />
                <p className="font-light text-sm">
                  info@sundaignosticslaboratory.in
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <MdLocationOn />
                <p className="font-light text-sm">
                  Main Branch: Ramamurthy Nagar, Nellore Other Branch: Pogathola
                  - Nellore,Gudur,Kavali
                </p>
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
          <form className="flex flex-col mt-5 lg:mt-0 space-y-5 items-center justify-center p-3 w-full">
            <div className="flex justify-evenly w-full space-x-3 lg:space-x-0">
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                style={{ color: "black", border: "black" }}
                variant="standard"
                value={formData.firstName}
                label="First Name"
              />
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                style={{ color: "black" }}
                variant="standard"
                value={formData.lastName}
                label="Last Name"
              />
            </div>
            <div className="flex justify-evenly w-full space-x-3 lg:space-x-0">
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{ color: "black", border: "black" }}
                variant="standard"
                value={formData.email}
                label="Email"
              />
              <Input
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                value={formData.mobile}
                style={{ color: "black" }}
                variant="standard"
                label="Phone Number"
              />
            </div>
            <div className="w-full md:w-2/3">
              <Input
                fullWidth
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                value={formData.message}
                variant="standard"
                label="Write Your Message"
              />
            </div>
            <SendButton
              variant="contained"
              endIcon={<SendIcon />}
              disableElevation
            >
              Send
            </SendButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
