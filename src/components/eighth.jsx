import Element2 from "../assets/Element2.svg";
import Element2_md from "../assets/Element2_md.svg";
import Element2_lg from "../assets/Element2_lg.svg";
import Element2_xl from "../assets/Element2_lg.svg";
import under_md from "../assets/under_md.svg";
import under_lg from "../assets/under_lg.svg";
import under_xl from "../assets/under_xl.svg";
import under from "../assets/under.svg";
import Asset from "../assets/Asset.svg";
import Circle from "../assets/Circle.svg";
import { ArrowRight } from "lucide-react";

function Your_Data() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-20 text-black md:px-5 md:py-35 lg:px-8 lg:py-35 xl:px-8 xl:py-35">

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-between ">
        {/* IMAGE COLUMN */}
        <div className=" mx-auto mb-25 md:mb-25 lg:mb-0 lg:mx-0 block md:hidden">
          <img
            src={Circle}
            alt=""
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-179.75 xl:h-114"
          />
        </div>
        <div className="hidden mx-auto mb-25 md:mb-25 lg:mb-0 lg:mx-0 md:block lg:hidden">
          <img
            src={Circle}
            alt=""
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-179.75 xl:h-114"
          />
        </div>
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
          {/* TITLE MOBILE */}
          <h1 className="block text-center  text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            100%&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-3 left-0 z-0 w-full "
              />

              <span className="relative z-10">your data</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
           100%&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-4 left-0 z-0 w-full "
              />

              <span className="relative z-10">your data</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left  text-[64px] font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            100%&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-4 left-0 z-0 w-full "
              />

              <span className="relative z-10">your data</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-164.25 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
            100%&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-3 left-0 z-0 w-full "
              />
              <span className="relative z-10">your data</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:block lg:hidden">
           The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-131.5 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden mt-6 mb-15 w-175 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
            The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
          </p>
          {/* BUTTON */}
          <button className="mb-15 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white  lg:mx-0 lg:mb-0 xl:mb-0">
            Read more <ArrowRight size={14} />
          </button>
        </div>
        <div className="hidden mb-25 md:mb-25 lg:mb-0 lg:mx-0 lg:block xl:block">
          <img
            src={Circle}
            alt=""
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-140.5 xl:w-179.75 xl:h-114"
          />
        </div>
      </div>
    </section>
  );
}
export default Your_Data;
