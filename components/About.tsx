import React from "react";
import DoctorIcon from "../public/assets/about/doctor.svg";
import MedKitIcon from "../public/assets/about/medkit.svg";
import LetterIcon from "../public/assets/about/letter.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-screen h-screen font-bold text-string">
      <h2 className="lg:p-20 text-2xl text-center my-10 lg:my-0 lg:text-left lg:text-6xl">
        Sun Diagnostics Laboratory
      </h2>
      <div className="flex justify-evenly px-5 lg:pl-20">
        <div className="flex flex-col h-screen space-y-10">
          <Card
            title="Diagnostic Services"
            content="To provide quality and reliable Laboratory Service at an affordable cost."
            pic="doctor"
          />
          <Card
            title="Health Packages"
            content="We strive to be the pioneer in making cutting-edge technology in clinical diagnostic accessible to the public."
            pic="medkit"
          />
          <Card
            title="Highly Accurate Reports"
            content="Using proper equipments, high quality reagents, strict internal and external quality assessment and control backed up by well qualified and dedicated professionals.."
            pic="letter"
          />
        </div>
        <img
          className="hidden lg:block"
          src="./assets/doctor-tie.svg"
          alt="doctor-tie"
        />
      </div>
    </div>
  );
};

interface Props1 {
  title: string;
  content: string;
  pic: string;
}

const Card = ({ title, content, pic }: Props1) => {
  return (
    <div className="draw-border hover:scale-105 hover:shadow-lg md:cursor-pointer rounded-lg flex lg:flex-row flex-col justify-center items-center space-y-5 lg:space-y-0 lg:space-x-5">
      <div
        style={{
          background:
            "linear-gradient(180deg, #394B57 0%, rgba(12, 212, 194, 0) 178.26%)",
        }}
        className="p-5 flex items-center justify-center rounded-full w-20 h-20"
      >
        {pic == "doctor" && <DoctorIcon />}
        {pic == "medkit" && <MedKitIcon />}
        {pic == "letter" && <LetterIcon />}
      </div>

      <div className="flex flex-col space-y-1">
        <p className="text-2xl font-bold text-center lg:text-left">{title}</p>
        <p className="text-xl italic font-light text-center lg:text-left">
          {content}
        </p>
      </div>
    </div>
  );
};

export default About;
