import React, { useRef } from "react";
import PackagesCard from "../components/packages/PackagesCard";
import Hero from "../components/tests/Hero";
import { data } from "../mock/packages";

const Packages = () => {
  const catalogRef = useRef(null);
  return (
    <div className="min-h-screen w-screen">
      <Hero title="Tests Packages" catalogRef={catalogRef} />

      <div
        ref={catalogRef}
        className="flex gap-10 bg-gradient-to-b items-start from-primary to-secondary p-10 flex-col md:flex-row justify-evenly flex-wrap"
      >
        <div className="w-2/3 mx-auto relative mb-32 top-20 bg-white h-1 rounded-lg" />
        {data?.map((item, index) => {
          return <PackagesCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Packages;
