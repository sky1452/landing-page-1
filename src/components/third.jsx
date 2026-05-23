import Element2 from "../assets/Element2.svg";
import Element2_md from "../assets/Element2_md.svg";
import Element2_lg from "../assets/Element2_lg.svg";
import Element2_xl from "../assets/Element2_lg.svg";
import under_md from "../assets/under_md.svg";
import th_under_lg from "../assets/th_under_lg.svg";
import under_xl from "../assets/under_xl.svg";
import under from "../assets/under.svg";
import Asset from "../assets/Asset.svg";
import WorkI from "../assets/Work.svg";

import { ArrowRight } from "lucide-react";

function Work() {
  return (
    <section className="relative w-full overflow-hidden pb-20 bg-white px-4 text-black md:px-5 lg:px-8  lg:pb-35 xl:px-8 xl:pb-25">
      {/* BACKGROUND 
      <div className="pointer-events-none absolute inset-0">
        <img src={Element2} alt="" className="absolute inset-0 top-12 -left-8 h-52.25 w-42  opacity-100 md:hidden" />
        <img src={Element2_md} alt="" className="hidden absolute inset-0 top-12 left-2 opacity-100 md:block lg:hidden" />
        <img src={Element2_lg} alt="" className="hidden absolute inset-0 top-12 left-2 opacity-100 lg:block xl:hidden" />
        <img src={Element2_xl} alt="" className="hidden absolute inset-0 w-50 rotate-z-10 -left-10 opacity-100 xl:block" />
      </div>
     */}

      {/* CONTENT CONTAINER */}
      <div className=" relative z-10 mx-auto flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-between ">
        {/* IMAGE COLUMN LG/XL*/}
        <div className="mx-auto lg:mx-0 hidden lg:block">
          <img
            src={WorkI}
            alt="Work Together"
            className="h-122.75 w-132 xl:w-145.75 xl:h-135.5 xl:block "
          />
        </div>

        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start ">
          {/* TITLE MOBILE */}
          <h1 className="block text-center text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Work &nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute top-7/13 left-0 z-0 w-full "
              />

              <span className="relative z-10">together</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Work&nbsp;
            <span className="relative inline-block">
              <img
                src={under_md}
                alt=""
                className="absolute -bottom-6 left-0 z-0 h-full w-full lg:hidden"
              />

              <span className="relative z-10">together</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left w-109 text-[64px] font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Work&nbsp;
            <span className="relative inline-block">
              <img
                src={th_under_lg}
                alt=""
                className="absolute top-13.5  left-3 z-0 xl:hidden"
              />

              <span className="relative z-10">together</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-164.25 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block ">
            Work&nbsp;
            <span className="relative inline-block">
              <img
                src={under_xl}
                alt=""
                className="absolute top-20 left-4 w-128.75 z-0 xl:block"
              />

              <span className="relative z-10">together</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:hidden">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-131.75 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden mt-6 mb-15 w-158.25 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block ">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          {/* BUTTON */}
          <button className="mb-15 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white md:mb-25 lg:mx-0 lg:mb-0 xl:mb-0 ">
            Try it now <ArrowRight size={10} />
          </button>
        </div>

        {/* IMAGE COLUMN MD*/}
        <div className="mx-auto  lg:mb-0 lg:mx-0 lg:hidden md:block">
          <img
            src={WorkI}
            alt="Work Together"
            className="h-64.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-122.75 lg:w-131.5 xl:w-171.25 xl:h-114 lg:hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
export default Work;
