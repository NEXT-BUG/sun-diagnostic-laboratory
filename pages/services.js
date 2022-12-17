import Head from "next/head";
import React, { useRef } from "react";
import BestService from "../components/services/BestService";
import Hero from "../components/services/Hero";
import MedicalServices from "../components/services/MedicalServices";
const Services = () => {
  const viewMoreRef = useRef(null);
  return (
    <div className="w-screen min-h-screen">
      <Head>
        <title>SDL | Services</title>
      </Head>
      <Hero viewMoreRef={viewMoreRef} />
      <MedicalServices viewMoreRef={viewMoreRef} />
      <BestService />
    </div>
  );
};

export default Services;
