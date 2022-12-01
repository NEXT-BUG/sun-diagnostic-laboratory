import Head from "next/head";
import React from "react";
import BestService from "../components/services/BestService";
import Hero from "../components/services/Hero";
import MedicalServices from "../components/services/MedicalServices";
const Services = () => {
  return (
    <div className="w-screen min-h-screen">
      <Head>
        <title>SDL | Services</title>
      </Head>
      <Hero />
      <MedicalServices />
      <BestService />
    </div>
  );
};

export default Services;
