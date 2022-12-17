import Image from "next/image";

const BlogsCard = ({ image, title, desc }) => {
  return (
    <div className="p-2 bg-white md:hover:scale-105 md:cursor-pointer duration-200 ease-out shadow-lg w-80 md:w-96 rounded-md">
      <Image
        alt=""
        className="object-fit object-center h-96 rounded-sm"
        src={image}
      />
      <div className="p-5 space-y-1">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default BlogsCard;
