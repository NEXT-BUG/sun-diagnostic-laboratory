import React from "react";
import DoctorIcon from "../public/assets/about/doctor.svg";
import MedKitIcon from "../public/assets/about/medkit.svg";
import LetterIcon from "../public/assets/about/letter.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="w-screen h-screen font-bold text-string">
      <h2 className="p-20 text-6xl">Sun Diagnostics Laboratory</h2>
      <div className="flex justify-evenly pl-20">
        <div className="flex flex-col h-screen space-y-20">
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
        <img src="./assets/doctor-tie.svg" alt="doctor-tie" />
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
    <div className="flex flex-col justify-end items-start space-y-3">
      <div className="flex items-center space-x-3">
        <div
          style={{
            background:
              "linear-gradient(180deg, #394B57 0%, rgba(12, 212, 194, 0) 178.26%)",
          }}
          className="p-5 inline-flex items-center justify-center rounded-full w-20 h-20"
        >
          {pic == "doctor" && <DoctorIcon />}
          {pic == "medkit" && <MedKitIcon />}
          {pic == "letter" && <LetterIcon />}
        </div>
        <p className="text-4xl font-bold">{title}</p>
      </div>
      <p className="text-xl italic font-light">{content}</p>
    </div>
  );
};

export default About;
