import Image from "next/image";
import React from "react";

interface RoadmapCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const RoadmapCard = ({ title, description, imageUrl }: RoadmapCardProps) => {
  return (
    <div className="w-full max-w-[358px] h-screen max-h-[430px] flex-between flex-col gap-5 bg-[#F5F6FA] rounded-3xl">
      <div className="flex-[1] w-full flex flex-col gap-3 items-start justify-center px-10">
        <h1 className="text-2xl text-[#111827] font-bold">
          {title || "Card Title"}
        </h1>
        <p className="text-sm text-[#1F2534] font-semibold max-w-[290px]">
          {description || "Card description"}
        </p>
      </div>
      <div className="flex-[0.5] w-full flex-center">
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={1080}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default RoadmapCard;
