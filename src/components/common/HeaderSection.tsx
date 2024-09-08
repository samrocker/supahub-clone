import { HeaderContent } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <section className="w-full absolute top-0 z-50">
      <main className="max-w-[1200px] m-auto">
        <div className="py-5 px-5 w-full flex-between">
          <div className="flex-[1] flex-start gap-5">
            <Image
              src="/images/logo.png"
              alt=""
              width={1920}
              height={1080}
              className="w-40"
            />
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-7">
            {HeaderContent.map((link, key) => (
              <Link
                href={link.rediect}
                key={key}
                className="text-md text-[#6B7589] font-semibold"
              >
                {link.title}
              </Link>
            ))}
            <Button className="text-white text-md font-semibold px-5 py-5 bg-[#862FE7] rounded-sm hover:bg-[#852fe7e1]">
              Sign up for free
            </Button>
          </div>
          <div className="flex-[1] flex-end lg:hidden gap-5">
            <Sheet>
              <SheetTrigger asChild>
                <Image
                  src="/icons/menu-line.svg"
                  alt=""
                  width={27}
                  height={27}
                  className="invert"
                />
              </SheetTrigger>
              <SheetContent side="top" className="bg-secondary">
                <div className="h-[30vh] w-full flex-center flex-col gap-5">
                  {HeaderContent.map((link, key) => (
                    <Link
                      href={link.rediect}
                      key={key}
                      className="text-md text-[#6B7589] font-semibold"
                    >
                      {link.title}
                    </Link>
                  ))}
                  <Button className="text-white text-md font-semibold px-5 py-5 bg-[#862FE7] rounded-sm hover:bg-[#852fe7e1]">
                    Sign up for free
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
