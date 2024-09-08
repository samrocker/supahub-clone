import Image from "next/image";
import React from "react";
import RoadmapCard from "../reuseable/RoadmapCard";

const RoadmapSection = () => {
  return (
    <section>
      <main className="max-w-[1152px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-10">
          <div className="pt-20 w-full flex-center flex-col gap-5">
            <span className="text-[#862FE7] text-sm lg:text-lg font-bold uppercase">
              Product roadmap tool
            </span>
            <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl font-semibold text-center max-w-[744px]">
              Public roadmap to show what you're working on next
            </h1>
            <p className="text-[#3F4654] text-xs md:text-sm lg:text-lg font-semibold text-center max-w-[663px]">
              All the features of product feedback tool you need to easily
              centralize product feedback from your customers and use that
              feedback to build better products.
            </p>
          </div>
          <div className="w-full flex-center flex-col gap-5">
            <Image
              src="/images/Roadmap-image.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <RoadmapCard
              title="Add priority table"
              description="Add new features as they come up or create a backlog of features that need to be prioritized eventually."
              imageUrl="/images/grid-image-1.png"
            />
            <RoadmapCard
              title="Customize statuses"
              description="Change the status of a feature from “planned” to “in progress” depending on the development stage."
              imageUrl="/images/grid-image-2.png"
            />
            <RoadmapCard
              title="Maintain transparency"
              description="Your public roadmap helps share what's coming and what's already been released."
              imageUrl="/images/grid-image-3.png"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RoadmapSection;
