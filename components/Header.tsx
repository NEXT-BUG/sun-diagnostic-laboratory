import React from "react";
import Image from "next/image";
import { AiOutlineDown } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  const path: string = router.pathname;

  if (!router.pathname) return null;

  return (
    <div className="w-screen bg-black px-10 flex justify-between items-start">
      <div className="bg-black">
        <Image
          src={require("../assets/images/logo.png")}
          loading="lazy"
          alt=""
        />
      </div>
      <div className="flex py-5 space-x-10 items-center text-white">
        <p
          onClick={() => router.push("/")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          Home
        </p>
        <p
          onClick={() => router.push("/services")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/services" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          Services
        </p>
        <p
          onClick={() => router.push("/tests")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/tests" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          Tests
        </p>
        <p
          onClick={() => router.push("/about")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/about" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          About Us
        </p>
        <p
          onClick={() => router.push("/blog")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/blog" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          Blog
        </p>
        <p
          onClick={() => router.push("/contact")}
          className={`text-md font-semibold md:cursor-pointer ${
            path == "/contact" && "md:border-b-2 md:border-[#00DCC9]"
          }`}
        >
          Contact
        </p>
        <AiOutlineDown className="md:cursor-pointer text-[#00DCC9]" />
        <BiSearch className="md:cursor-pointer text-[#00DCC9]" />
      </div>
    </div>
  );
};

export default Header;
