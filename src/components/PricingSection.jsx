import { useState } from "react";

import under_md from "../assets/under_md.svg";
import th_under_lg from "../assets/th_under_lg.svg";
import under_xl from "../assets/under_xl.svg";
import choo from "../assets/choo.svg";

import Card1 from "./FreePlanCard";
import Card2 from "./PersonalPlanCard";
import Card3 from "./OrganizationPlanCard";

import SliderDots from "./SliderDots";
import { ArrowRight } from "lucide-react";

function Choose() {
  const [mode, setMode] = useState("card2");

  return (
    <section className="relative w-full overflow-hidden py-20 bg-white px-4 text-black md:px-5 md:py-35 lg:px-8  lg:pb-35 xl:px-8 xl:py-35 2xl:px-55 2xl:py-35">
      {/* BACKGROUND 
      <div className="pointer-events-none absolute inset-0">
        <img src={Element2} alt="" className="absolute inset-0 top-12 -left-8 h-52.25 w-42  opacity-100 md:hidden" />
        <img src={Element2_md} alt="" className="hidden absolute inset-0 top-12 left-2 opacity-100 md:block lg:hidden" />
        <img src={Element2_lg} alt="" className="hidden absolute inset-0 top-12 left-2 opacity-100 lg:block xl:hidden" />
        <img src={Element2_xl} alt="" className="hidden absolute inset-0 w-50 rotate-z-10 -left-10 opacity-100 xl:block" />
      </div>
     */}

      {/* CONTENT CONTAINER */}
      <div className=" relative z-10 gap-15 mx-auto flex w-full flex-col items-center lg:items-center lg:justify-between ">
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 ">
          {/* TITLE MOBILE */}
          <h1 className="block text-center text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Choose Your &nbsp;
            <span className="relative inline-block">
              <img src={choo} alt="" className="absolute bottom-0 z-0 w-full" />

              <span className="relative z-10">Plan</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Choose
            <span className="relative inline-block">
              <img
                src={under_md}
                alt=""
                className="absolute -bottom-5 left-0 z-0 h-full w-full lg:hidden"
              />

              <span className="relative z-10">Your Plan</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-center w-full text-[64px] font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Choose
            <span className="relative inline-block">
              <img
                src={th_under_lg}
                alt=""
                className="absolute top-16  left-3 z-0 xl:hidden"
              />

              <span className="relative z-10">Your Plan</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-center text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block ">
            Choose &nbsp;
            <span className="relative inline-block">
              <img
                src={under_xl}
                alt=""
                className="absolute top-20 left-4 w-128.75 z-0 xl:block"
              />

              <span className="relative z-10">Your Plan</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:hidden">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden w-244 mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden mt-6 mb-15 w-158.25 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block ">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
          {/*CARDS COLUMN*/}
          <div className="hidden lg:flex gap-8 flex-row items-center">
            {" "}
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
        </div>

        {/*CARDS COLUMN*/}
        <div className="flex flex-col items-center lg:hidden">
          {mode === "card1" && <Card1 />}
          {mode === "card2" && <Card2 />}
          {mode === "card3" && <Card3 />}

          <SliderDots mode={mode} setMode={setMode} />
        </div>
      </div>
    </section>
  );
}
export default Choose;
