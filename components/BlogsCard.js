import Image from "next/image";

const BlogsCard = ({ image, title, desc }) => {
  return (
    <div className="p-2 bg-white shadow-lg w-80 md:w-96 rounded-md">
      <Image
        alt=""
        className="object-fit object-center h-96 rounded-sm"
        src={image}
      />
      <div className="p-5">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="">{desc}</p>
      </div>
      <div className="flex justify-between p-5">
        <p className="text-gray-400 font-bold">Date</p>
        <p>17/12/2022</p>
      </div>
    </div>
  );
};

export default BlogsCard;
