import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <main className="max-w-[1430px] m-auto">
        <div className="pt-5 px-5 min-h-screen w-full flex-between flex-col">
          <div className="flex-center flex-col gap-5 lg:gap-10 mt-60 lg:mt-44">
            <span className="text-[#862FE7] text-xs md:text-sm lg:text-lg font-bold uppercase">
              Product & Customer Feedback Tool
            </span>
            <h1 className="text-primary text-2xl md:text-4xl lg:text-6xl font-semibold text-center max-w-[650px]">
              Central hub to collect feedback & announce product updates
            </h1>
            <p className="text-[#3F4654] text-xs md:text-sm lg:text-lg font-semibold text-center max-w-[571px]">
              With Supahub collect, organize and prioritize feature requests to
              better understand customer feedback and use them to inform your
              product roadmap.
            </p>
            <div className="flex-between flex-row gap-5">
              <Button className="text-white text-xs md:text-sm lg:text-lg flex-between gap-1 md:gap-2 font-semibold px-3 md:px-5 py-6 lg:py-7 bg-primary rounded-sm">
                <Image
                  src="/icons/button-star.png"
                  alt=""
                  width={23}
                  height={23}
                  className="hidden lg:block"
                />
                <Image
                  src="/icons/button-star.png"
                  alt=""
                  width={15}
                  height={15}
                  className="block lg:hidden"
                />
                Sign up for free
              </Button>
              <Button className="text-primary text-xs md:text-sm lg:text-lg flex-between gap-2 font-semibold px-3 md:px-5 py-6 lg:py-7 bg-transparent rounded-sm border-[1px] border-primary/20">
                See Supahub in action
              </Button>
            </div>
            <div className="flex-center gap-3">
              <div className="flex-between gap-2">
                <Image
                  src="/icons/credit-card-icon.png"
                  alt=""
                  height={20}
                  width={20}
                />
                <h1 className="text-xs md:text-sm font-semibold text-[#495060]">
                  No credit card required
                </h1>
              </div>
              <div className="flex-center relative">
                <Image
                  src="/icons/dot-icon.png"
                  alt=""
                  height={5}
                  width={5}
                  objectFit="absolute top-50 left-50 cover"
                />
              </div>
              <div className="flex-between gap-2">
                <Image
                  src="/icons/timer-icon.png"
                  alt=""
                  height={20}
                  width={20}
                />
                <h1 className="text-xs md:text-sm font-semibold text-[#495060]">
                  14-day free trial
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-center flex-col relative">
            <Image
              src="/images/bg-hero-gradient.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full"
            />
            <Image
              src="/images/hero-shawcase-card.png"
              alt=""
              width={1920}
              height={1080}
              className="w-full absolute bottom-0 z-10"
            />
            <div className="h-full w-full flex-center absolute"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
