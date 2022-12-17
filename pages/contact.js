import React, { useState } from "react";
import { MdPhoneInTalk, MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import SendIcon from "@mui/icons-material/Send";
import Head from "next/head";
import { Input, SendButton } from "../components/styledMUI";
import { toast } from "react-hot-toast";
import client from "../studio/sanity-client";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const addToSanity = () => {
    const toastId = toast.loading(<b>Submitting Contact Form...</b>);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      toast.error(<b>Please fill all the required fields!</b>, { id: toastId });
      return;
    }

    const doc = {
      _type: "contact",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    client
      .create(doc)
      .then((res) => {
        toast.success(<b>Contact Form is Successfully Submitted</b>, {
          id: toastId,
        });
        console.log(`Document was created, document ID is ${res._id}`);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      })
      .catch((err) => {
        toast.error(<b>Contact Form is not Submitted - Error Occurred</b>, {
          id: toastId,
        });
        console.error(err);
      });
  };

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
              <div className="flex items-start space-x-4">
                <MdPhoneInTalk className="w-5 h-5" />
                <p className="font-semibold text-sm">
                  +91 86123 16078
                  <br />
                  +91 90309 31931
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <IoMdMail className="w-5 h-5" />
                <p className="font-semibold text-sm">
                  info@sundaignosticslaboratory.in
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <MdLocationOn className="w-5 h-5" />
                <div className="font-light flex flex-col text-sm">
                  <div>
                    <p className="text-xs font-bold">Main Branch:</p>
                    <p className="font-light">Ramamurthy Nagar, Nellore </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold">Other Branch:</p>
                    <p className="font-light">
                      Pogathola - Nellore,Gudur,Kavali
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <div className="bg-black p-2 rounded-full md:active:scale-50 md:hover:scale-105 md:cursor-pointer duration-300 ease-out">
                <BsTwitter className="text-white" />
              </div>
              <div className="bg-black p-2 rounded-full md:active:scale-50 md:hover:scale-105 md:cursor-pointer duration-300 ease-out">
                <BsInstagram className="text-white" />
              </div>
              <div className="bg-black p-2 rounded-full md:active:scale-50 md:hover:scale-105 md:cursor-pointer duration-300 ease-out">
                <AiFillFacebook className="text-white" />
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
              onClick={addToSanity}
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
