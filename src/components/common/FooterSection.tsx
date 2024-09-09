import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <section>
      <main className="max-w-[1200px] m-auto">
        <div className="py-10 px-5 w-full flex flex-col-reverse md:flex-col gap-5 border-t-[1px] boder-[#0B3D79]/50">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-content-between">
            <div className="py-5 w-full flex flex-col gap-3 items-start justify-start">
              <h1 className="text-lg font-bold text-[#3F4654] uppercase">
                Product
              </h1>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Pricing
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternatives
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                View Demo
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Our Roadmap
              </Link>
            </div>
            <div className="py-5 w-full flex flex-col gap-3 items-start justify-start">
              <h1 className="text-lg font-bold text-[#3F4654] uppercase">
                Features
              </h1>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Feedback Boards
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Product Roadmap
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Product Changelog{" "}
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                All Features
              </Link>
            </div>
            <div className="py-5 w-full flex flex-col gap-3 items-start justify-start">
              <h1 className="text-lg font-bold text-[#3F4654] uppercase">
                Resources
              </h1>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Blog
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Glossary
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Request a feature
              </Link>
            </div>
            <div className="py-5 w-full flex flex-col gap-3 items-start justify-start">
              <h1 className="text-lg font-bold text-[#3F4654] uppercase">
                Policies
              </h1>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Privacy Policy
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Terms of Service
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                All Legal
              </Link>
            </div>
            <div className="py-5 w-full flex flex-col gap-3 items-start justify-start">
              <h1 className="text-lg font-bold text-[#3F4654] uppercase">
                Compare
              </h1>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternative to Canny.io
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternative to Beamer
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternative to Nolt.io
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternative to Uservoice
              </Link>
              <Link href="/" className="text-base text-[#3F4654] font-semibold">
                Alternative to Trello
              </Link>
            </div>
          </div>
          <div className="w-full flex-between flex-col lg:flex-row gap-5">
            <div className="flex-[1] flex-start gap-2">
              <Image src='/icons/copyright-star.png' alt="" width={27} height={27} />
              <h1 className="text-base text-[#6B7589] font-semibold">Copyright © 2024 Supahub. All rights reserved.</h1>
            </div>
            <div className="flex-[1] flex-end gap-5">
            <Image src='/icons/X-icon.png' alt="" width={20} height={20} />
            <h1 className="text-base text-[#6B7589] font-normal">/</h1>
            <Image src='/icons/instagram-icon.png' alt="" width={20} height={20} />
            <h1 className="text-base text-[#6B7589] font-normal">/</h1>
            <Image src='/icons/linkedin-icon.png' alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FooterSection;
