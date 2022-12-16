import { useRouter } from "next/router";
import React from "react";

const PackagesCard = ({ packageId, packageName, rate, tests }) => {
  const router = useRouter();
  return (
    <div className="bg-white md:hover:scale-105 duration-100 w-full ease-out md:w-1/3 rounded-md shadow-2xl">
      <div className="w-full p-5 bg-gray-500 rounded-t-md">
        <p className="text-white font-bold text-center text-sm">
          {packageName}
        </p>
      </div>
      <div className="p-10">
        <div className="justify-center w-full flex font-bold">
          <p className="text-xl">Rs.</p>
          <p className="text-4xl">{rate}</p>
        </div>
      </div>
      <div className="">
        {tests?.map((item, index) => {
          return (
            <div key={index} className="p-4 border-t">
              <p className="text-center text-sm">{item}</p>
            </div>
          );
        })}
      </div>
      <div className="p-4 text-center border-t">
        <button
          onClick={() => router.push("/book/" + packageId)}
          className="px-4 md:hover:scale-110 md:active:scale-75 duration-100 ease-out py-2 bg-gradient-to-r from-primary/95 rounded-md shadow-2xl text-white font-bold to-primary"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackagesCard;
