import Image from "next/image";
import React from "react";

const mockNews = [
  {
    image: "news-1.png",
    title: "Title 1",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
  {
    image: "news-2.png",
    title: "Title 2",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
  {
    image: "news-3.png",
    title: "Title 3",
    shortDesc:
      "Commodo mollit elit nulla excepteur aliqua aute excepteur reprehenderit minim enim anim nulla.Magna ad sunt nostrud cupidatat pariatur ad.",
  },
];

const News = () => {
  return (
    <div className="bg-black w-screen pb-10 h-full lg:h-screen text-white flex flex-col items-center space-y-4">
      <div className="w-[70%] h-1 rounded-lg mb-5 lg:mb-0 lg:w-1 lg:h-[13%] bg-primary mx-auto" />
      <div className="lg:pb-20">
        <h1 className="text-3xl text-center font-bold ">Latest News</h1>
        <p className="text-sm font-semibold text-center text-primary">
          CHECK OUT SOME OF OUR NEWS
        </p>
      </div>

      <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-evenly w-screen">
        {mockNews?.map((news, index) => (
          <Cards key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;

const Cards = ({ image, title, shortDesc }) => {
  return (
    <div className="w-96 space-y-4 border rounded-lg border-primary">
      <Image
        src={require(`../../assets/images/${image}`)}
        className="rounded-t-lg"
      />
      <div className="p-4 space-y-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-semibold">{shortDesc}</p>
      </div>
    </div>
  );
};
