import { FAQSectionContent } from "@/constants";
import Image from "next/image";
import React from "react";

const FAQSection = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/images/FAQ-bg-gradient-.png"
        alt="FAQ Background"
        layout="fill"
        objectFit="cover"
        className="w-full"
      />
      <div className="px-5 py-10 flex flex-col gap-10 justify-center items-start max-w-[1380px] m-auto pt-20">
        <div className="flex flex-col gap-5">
          <span className="text-[#862FE7] text-xs md:text-sm lg:text-lg font-bold uppercase">
            Frequently asked questions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#111827] font-semibold">
            Everything you need to know
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-[#3F4654] font-semibold">
            If you have anything else you want to ask,
            <span className="text-[#862FE7]">reach out to us.</span>
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-2 items-start justify-between xs:max-w-[800px] xs:m-auto lg:max-w-none">
          {FAQSectionContent.map((link, key) => (
            <div
              key={key}
              className="py-5 w-full max-w-[362px] flex flex-col gap-3 items-start justify-center"
            >
              <h1 className="text-xl text-[#111827] font-semibold">
                {link.title || "title"}
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-[#111827] font-semibold">
                {link.description || "description"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
