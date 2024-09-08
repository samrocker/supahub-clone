import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BottomBannerSection = () => {
  const background = "/images/bottom-banner-bg.png";

  return (
    <section>
      <main className="max-w-[1382px] mx-auto">
        <div className="px-5 py-20 w-full flex justify-center items-center">
          <div className="w-full bg-[#111827] rounded-3xl relative px-5 bg-banner">
            <div className="h-full w-full flex flex-col items-center justify-center gap-7 py-10">
              <span className="text-white text-xs md:text-sm lg:text-lg font-bold uppercase">
                Get started with Supahub for free
              </span>
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center max-w-[650px]">
                Stop wasting time & start collecting user feedback
              </h1>
              <p className="text-white text-sm lg:text-lg font-normal text-center max-w-[571px]">
                Keep track of feature requests and understand which feedback
                carry the most impact and should be prioritized.
              </p>
              <div className="flex items-center flex-col lg:flex-row gap-5">
                <Button className="text-black text-sm lg:text-lg flex items-center gap-2 font-semibold px-3 md:px-5 py-6 lg:py-7 hover:bg-white/90 bg-white rounded-sm">
                  <Image
                    src="/icons/button-star-black.png"
                    alt="Star Icon"
                    width={23}
                    height={23}
                    className="hidden lg:block"
                  />
                  <Image
                    src="/icons/button-star.png"
                    alt="Star Icon"
                    width={15}
                    height={15}
                    className="block lg:hidden"
                  />
                  Sign up for free
                </Button>
                <Button className="text-white text-sm lg:text-lg flex items-center gap-2 font-semibold px-3 md:px-5 py-6 lg:py-7 bg-transparent rounded-sm border border-white/20 hover:bg-white hover:text-black">
                  See Supahub in action
                </Button>
              </div>
              <div className="flex-center flex-col lg:flex-row gap-3">
                <div className="flex-between gap-2">
                  <Image
                    src="/icons/credit-card-icon-white.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                  <h1 className="text-xs md:text-sm font-semibold text-white">
                    No credit card required
                  </h1>
                </div>
                <div className="flex-between gap-2">
                  <Image
                    src="/icons/timer-icon-white.png"
                    alt=""
                    height={20}
                    width={20}
                  />
                  <h1 className="text-xs md:text-sm font-semibold text-white">
                    14-day free trial
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BottomBannerSection;
