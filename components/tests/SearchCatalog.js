import { useRouter } from "next/router";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

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
      className={`md:sticky top-20 my-10 bg-white border text-black rounded-md ${
        shadow && "shadow-2xl"
      } ${border && "border border-black"} p-10 ${className}`}
    >
      <div className="border-primary rounded-sm flex items-center border px-3 mb-5 py-2">
        <input
          placeholder="Search"
          type="text"
          className="outline-none w-full mx-2 font-bold"
        />
        <button className="md:hover:scale-105 ease-out duration-100 md:active:scale-75">
          <AiOutlineSearch />
        </button>
      </div>
      <h1 className="font-bold text-2xl mb-5 text-center md:text-left">
        Test Catalog
      </h1>
      <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
        {alphabets?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => router.push("/tests?search=" + item)}
              className="catalog-letter"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchCatalog;
