import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const MedicalServices = ({ viewMoreRef }) => {
  const router = useRouter();
  return (
    <div
      ref={viewMoreRef}
      className="w-screen bg-secondary flex justify-center flex-col"
    >
      <div className="flex flex-col-reverse my-10 lg:flex-row justify-center items-center lg:items-start w-[75%] mx-auto text-white font-ubuntu lg:justify-between">
        <div className="flex flex-col text-center lg:text-left justify-center items-center lg:items-start space-y-2">
          <h1 className="text-5xl mt-5 lg:text-5xl text-shadow-sm font-bold">
            Sun Diagnostics <br />
            Laboratory{" "}
          </h1>
          <p className="text-lg text-left">
            Salient features of Labgenius diagnostic services includes,
            <br />
            1. Diagnosis – confirmation or rejection of clinical diagnosis
            <br />
            2. Prognosis - information regarding the likely out of come of
            disease
            <br />
            3. Monitoring - natural history or response to treatment
            <br />
            4. Screening -detection of subclinical disease.
          </p>
          <button
            onClick={() => router.push("/packages")}
            className="text-xl md:hover:border-black font-bold border rounded-sm md:active:scale-90 md:hover:scale-105 md:hover:text-black md:hover:bg-primary duration-150 ease-out border-white px-4 py-3"
          >
            Book Appointment
          </button>
        </div>
        <Image
          alt=""
          className="w-96 h-96 border bg-gray-200 rounded-full shadow-2xl scale-75"
          src={require("../../assets/images/doctors.png")}
        />
      </div>
    </div>
  );
};

export default MedicalServices;
