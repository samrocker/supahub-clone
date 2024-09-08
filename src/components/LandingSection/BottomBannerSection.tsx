import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const BottomBannerSection = () => {
  return (
    <section>
      <main className="max-w-[1382px] mx-auto">
        <div className="px-5 py-20 w-full flex flex-col justify-center items-center gap-10">
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
          <div className="py-10 w-full flex-center relative">
            <VelocityScroll
              default_velocity={5}
              className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-5xl flex gap-10"
            >
              <div className="flex-center gap-5">
              <span>Announce Changelog</span>
              <Image src='/icons/button-star-black.png' alt="" width={35} height={35} />
              <span>Collect Feedback</span>
              <Image src='/icons/button-star-black.png' alt="" width={35} height={35} />
              <span>Showcase Roadmap</span>
              <Image src='/icons/button-star-black.png' alt="" width={35} height={35} />
              </div>
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent dark:from-background"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BottomBannerSection;
