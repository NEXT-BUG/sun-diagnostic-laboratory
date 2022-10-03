import React from "react";

type Props = {};

const BestService = (props: Props) => {
  return (
    <div className="h-screen w-screen mt-20 pt-20">
      <h1 className="text-center font-bold text-5xl text-string">
        Provides our Best Service
      </h1>
      <img
        src="./assets/blue-tail.svg"
        className="absolute rotate-180 -bottom-0 left-0 -z-10"
        alt="blue-tail"
      />
      <img
        src="./assets/blue-tail.svg"
        className="absolute -bottom-0 right-0 -z-10"
        alt="blue-tail"
      />

      <div className=" lg:m-20 flex flex-wrap gap-10 justify-evenly">
        {[1, 2, 3, 4, 5, 6].map((_, i) => {
          return (
            <Card
              pic="./assets/doctor.svg"
              title="Clinic Pathology"
              content="The Clinical Pathology at Sun Diagnostics supports the diagnosis of disease using laboratory testing The Clinical Pathology at Sun Diagnostics supports"
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

interface Props1 {
  title: string;
  content: string;
  pic: string;
}
const Card = ({ pic, title, content }: Props1) => {
  return (
    <div className="z-10 flex flex-col items-center w-96 text-center space-y-5">
      <img className="rounded-full w-64 h-64" src={pic} alt="doctor" />
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="italic text-xl">{content}</p>
    </div>
  );
};

export default BestService;
