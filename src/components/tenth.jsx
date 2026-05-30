import Apps from "../assets/Apps.svg";
import back from "../assets/back.png";
import back_md from "../assets/back_md.png";
import back_lg from "../assets/back_lg.png";
import back_xl from "../assets/back_xl.png";
import { ArrowRight } from "lucide-react";

function Work_with() {
  return (
    <section className="relative w-full overflow-hidden bg-[#043873] px-4 py-20 text-white md:px-5 md:py-35 lg:px-8 lg:py-35 xl:px-8 xl:py-35 2xl:px-55 2xl:py-35">
        {/* BACKGROUND */}
              <div className="pointer-events-none absolute inset-0">
                <img
                  src={back}
                  alt=""
                  className="absolute object-cover -top-10 md:hidden"
                />
                <img
                  src={back_md}
                  alt=""
                  className="hidden absolute inset-0 h-173.25 w-371.25 object-cover  md:block lg:hidden"
                />
                <img
                  src={back_lg}
                  alt=""
                  className="hidden absolute inset-0  lg:block xl:hidden"
                />
                <img
                  src={back_xl}
                  alt=""
                  className="hidden absolute inset-0  xl:block"
                />
              </div>
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex flex-col items-center lg:flex-row lg:items-center lg:justify-between xl:justify-between ">
        {/* IMAGE COLUMN */}
        <div className=" mx-auto mb-25 md:mb-25 lg:mb-0 lg:mx-0 block md:hidden">
          <img
            src={Apps}
            alt=""
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-179.75 xl:h-114"
          />
        </div>
        <div className="hidden  mb-25 md:mb-25 lg:mb-0 lg:mx-0 lg:block xl:block">
          <img
            src={Apps}
            alt=""
            className="h-47.75  md:h-91.75 md:w-137.75 lg:h-106.5 lg:w-140.5 xl:w-179.75 xl:h-114"
          />
        </div>
        <div className="hidden mx-auto mb-25 md:mb-25 lg:mb-0 lg:mx-0 md:block lg:hidden">
          <img
            src={Apps}
            alt=""
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-179.75 xl:h-114"
          />
        </div>
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
          {/* TITLE MOBILE */}
          <h1 className="block text-center w-72  text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Work with Your Favorite Apps Using whitepace
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden w-150 text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
           Work with Your Favorite Apps Using whitepace
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left w-115 text-[64px] font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Work with Your Favorite Apps Using whitepace
           
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-164.25 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
            Work with Your Favorite Apps Using whitepace
            
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 w-72 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:block md:w-182 lg:hidden">
Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-131.5 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden mt-6 mb-15 w-175 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.          </p>
          {/* BUTTON */}
          <button className="flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white  lg:mx-0 lg:mb-0 xl:mb-0">
            Read more <ArrowRight size={14} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
export default Work_with;
