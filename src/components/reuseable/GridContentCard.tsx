import Image from "next/image";
import React from "react";

interface GridContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const GridContentCard = ({
  title,
  description,
  imageUrl,
}: GridContentCardProps) => {
  return (
<div className="w-full max-w-[352px] flex-between gap-3">
      <div className="flex-[0.1] flex flex-col items-start justify-start">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full"
          width={100}
          height={100}
        />
      </div>
      <div className="flex-[1] pr-3 flex flex-col items-start justify-center">
        <h1 className="text-lg font-semibold text-[#111827]">
          {title || "title"}
        </h1>
        <p className="text-sm font-semibold text-[#111827]">
          {description || "description"}
        </p>
      </div>
    </div>
  );
};

export default GridContentCard;
