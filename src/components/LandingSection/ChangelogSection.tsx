import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const ChangelogSection = () => {
  return (
    <section>
      <main className="lg:max-w-[1200px] md:max-w-[600px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col lg:flex-row-reverse gap-5">
          <div className="flex-[1] w-full flex-start relative pt-28">
            <Image
              src="/images/priritizing-bg-gradient.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="/images/Changelog-image.png"
              alt=""
              width={1920}
              height={1080}
              className="w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex-[1] w-full flex flex-col gap-7 items-start justify-centerpx-16">
            <span className="text-[#DC5F05] text-sm lg:text-lg font-bold uppercase">
              Product Changelog & Release Notes
            </span>
            <h1 className="text-2xl md:text-5xl text-[#111827] font-semibold max-w-[483px]">
              Announce new features with product changelog
            </h1>
            <p className="text-base text-[#1F2534] font-semibold max-w-[451px]">
              Whether you're launching new features or making improvements to
              existing functionality, product changelog makes it easy to keep
              your customers up-to-date on your progress.
            </p>
            <Button className="font-semibold text-base py-7 px-5 flex-center gap-2">
              Explore product changelog
              <Image
                src="/icons/arrow-icon.png"
                alt=""
                width={27}
                height={27}
              />
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ChangelogSection;
