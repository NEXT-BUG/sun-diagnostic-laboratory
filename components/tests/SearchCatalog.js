import { useRouter } from "next/router";
import React from "react";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "ALL",
];

const SearchCatalog = ({ shadow, border, className }) => {
  const router = useRouter();
  return (
    <div
      className={`md:sticky top-10 bg-white text-black mx-10 rounded-md ${
        shadow && "shadow-2xl"
      } ${border && "border border-black"} p-5 ${className}`}
    >
      <h1 className="font-bold text-xl mb-5 text-center md:text-left">
        Test Catalog
      </h1>
      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
        {alphabets?.map((item) => {
          return (
            <p
              onClick={() => router.push("/tests?search=" + item)}
              className="catalog-letter"
            >
              {item}
            </p>
          );
        })}
      </div>
      <div className="flex flex-col justify-center gap-5 my-10">
        <p className="catalog-services">Services</p>
        <p className="catalog-services">Profile</p>
        <p className="catalog-services">About Us</p>
        <p className="catalog-services">Blog</p>
        <p className="catalog-services">Contact Us</p>
        <p className="catalog-services">Health Packages</p>
        <p className="catalog-services">Make an Appointment</p>
      </div>
    </div>
  );
};

export default SearchCatalog;
