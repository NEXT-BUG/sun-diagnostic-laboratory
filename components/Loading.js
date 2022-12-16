import Image from "next/image";
import React from "react";
import { Dna } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-screen flex-col bg-gradient-to-b from-primary to-black min-h-screen flex justify-center items-center">
      <Image
        className="animate-pulse w-96"
        src={require("../assets/images/logo.png")}
      />
      <Dna animationDuration="1" width="200" visible={true} />
    </div>
  );
};

export default Loading;
