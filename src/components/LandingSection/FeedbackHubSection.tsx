import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import FeedbackSlider from "../common/Feedback-slider";

const FeedbackHubSection = () => {
  return (
    <section className="w-full bg-[#EBDAFD]">
      <main className="max-w-[1200px] m-auto">
        <div className="py-5 px-5 w-full flex flex-col gap-20">
          <div className="w-full flex flex-col lg:flex-row gap-5min-h-[50vh] h-full pt-20 gap-5">
            <div className="flex-[1.5] h-full w-full flex flex-col items-start justify-start gap-5">
              <p className="text-primary text-lg font-bold uppercase">
                Public feedback portal
              </p>
              <h1 className="text-[#5F259E] text-3xl md:text-4xl lg:text-5xl font-semibold max-w-[460px]">
                Your feedback hub, your way
              </h1>
            </div>
            <div className="flex-[1] w-full flex flex-col gap-7 items-start justify-start h-full">
              <p className="text-[#1F2534] text-lg font-normal">
                Public feedback portal is where users can leave feature requests
                and comments about their ideas and feature requests for your
                product. These public portals can be customized as per your
                brand.
              </p>
              <Button className="text-base flex-between gap-1 py-6 rounded-lg">
                Explore feedback boards
                <Image
                  src="/icons/arrow-icon.png"
                  alt=""
                  width={27}
                  height={27}
                />
              </Button>
            </div>
          </div>
          <div className="w-full flex-between gap-5 bg-[#BD8FF0] rounded-3xl">
            <FeedbackSlider />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 md:pb-20">
            <div className="flex-[1] w-full flex flex-col gap-3 border-[1px] border-t-[#6B7589] pt-5">
              <h1 className="text-2xl text-[#111827] font-semibold">
                Comment threads
              </h1>
              <p className="text-sm text-[#1F2534] font-semibold max-w-[322px]">
                Have discussions with your users to clarify and understand their
                needs.
              </p>
            </div>
            <div className="flex-[1] w-full flex flex-col gap-3 border-[1px] border-t-[#6B7589] pt-5">
              <h1 className="text-2xl text-[#111827] font-semibold">
                Set OpenGraph image
              </h1>
              <p className="text-sm text-[#1F2534] font-semibold max-w-[322px]">
                Add an open-graph image that will show up. when you share on
                social media sites.
              </p>
            </div>
            <div className="flex-[1] w-full flex flex-col gap-3 border-[1px] border-t-[#6B7589] pt-5">
              <h1 className="text-2xl text-[#111827] font-semibold">
                Set Dark/Light theme
              </h1>
              <p className="text-sm text-[#1F2534] font-semibold max-w-[322px]">
                Select theme for your public feedback portal for consistent user
                experience.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FeedbackHubSection;
