import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const PriotizingSection = () => {
  return (
    <section>
      <main className="lg:max-w-[1200px] md:max-w-[600px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row gap-5">
          <div className="flex-[1.3] w-full flex-start relative pt-28">
            <Image
              src="/images/priritizing-bg-gradient.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="/images/prioritization-example.png"
              alt=""
              width={1920}
              height={1080}
              className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex-[1] w-full flex flex-col gap-5 items-start justify-center md:px-16">
            <span className="text-[#E22BA4] text-sm lg:text-lg font-bold uppercase">
              Prioritize Feature Requests
            </span>
            <h1 className="text-2xl md:text-5xl text-[#111827] font-semibold">
              Prioritization tool to help you build most needed features
            </h1>
            <p className="text-base text-[#1F2534] font-semibold">
              Easily prioritize feature requests using a customizable framework.
              Sort, filter, and collaborate on high-priority items to streamline
              your product roadmap and meet customer expectations efficiently.
            </p>
            <Button className="font-semibold text-base py-7 px-5 flex-center gap-2">
                Explore product roadmap
                <Image src='/icons/arrow-icon.png' alt="" width={27} height={27} />
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default PriotizingSection;
