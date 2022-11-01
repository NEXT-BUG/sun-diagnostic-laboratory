import React from "react";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";

const Input = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "&.Mui-focused fieldset": {
    borderColor: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
});

const RadioStyle = styled(Radio)({
  "&.Mui-checked": {
    color: "black",
  },
});

const SendButton = styled(Button)({
  "&.MuiButton-contained": {
    backgroundColor: "#00DCC9",
    color: "white",
    fontWeight: "700",
  },
});

const Contact = () => {
  return (
    <div className="w-screen h-screen pt-10 bg-slate-100">
      <Head>
        <title>SDL | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold">Contact US</h1>
          <p className="text-sm text-gray-500 font-semibold">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div className="flex w-2/3 mx-auto bg-white mt-20 p-2 rounded-lg shadow-sm">
          <div className="bg-primary text-left w-[25rem] p-10 h-[30rem] rounded-lg flex flex-col justify-between">
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
          <div className="flex flex-col space-y-6 items-center justify-center p-3 w-full">
            <div className="flex justify-evenly w-full">
              <Input
                style={{ color: "black", border: "black" }}
                variant="standard"
                label="First Name"
              />
              <Input
                style={{ color: "black" }}
                variant="standard"
                label="Last Name"
              />
            </div>
            <div className="flex justify-evenly w-full">
              <Input
                style={{ color: "black", border: "black" }}
                variant="standard"
                label="Email"
              />
              <Input
                style={{ color: "black" }}
                variant="standard"
                label="Phone Number"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-left">Select Subject?</p>
              <div className="mt-1">
                <RadioGroup row>
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Inquiry 1"
                    value="Inquiry 1"
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Inquiry 2"
                    value="Inquiry 2"
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Inquiry 3"
                    value="Inquiry 3"
                  />
                  <FormControlLabel
                    control={<RadioStyle />}
                    label="Inquiry 4"
                    value="Inquiry 4"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className="w-2/3">
              <Input fullWidth variant="standard" label="Write Your Message" />
            </div>
            <SendButton
              variant="contained"
              endIcon={<SendIcon />}
              disableElevation
            >
              Send
            </SendButton>
          </div>
        </div>
      </div>
      <Image
        className="absolute right-20 bottom-0"
        src={require("../assets/images/letter-send.png")}
      />
    </div>
  );
};

export default Contact;
