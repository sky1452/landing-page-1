import Asset from "../assets/Asset.svg";
import under_md from "../assets/under_md.svg";
import under from "../assets/under.svg";
import under2 from "../assets/use_under_lg.svg";
import { ArrowRight } from "lucide-react";

function Use() {
  return (
    <section className="relative w-full overflow-hidden bg-[#043873] px-4 py-20 text-white md:px-8 md:py-25 lg:px-8 lg:py-35 xl:px-8 xl:py-35 2xl:px-55 2xl:py-35">
      {/* BACKGROUND 
      <div className="pointer-events-none absolute inset-0">
        <img
          src={Element}
          alt=""
          className="absolute inset-0 h-158.25 w-256.5 object-cover opacity-30 md:hidden"
        />
        <img
          src={Element_md}
          alt=""
          className="hidden absolute inset-0 h-173.25 w-371.25 object-cover opacity-30 md:block"
        />
        <img
          src={Element_lg}
          alt=""
          className="hidden absolute inset-0 h-105.5 w-397.75 object-cover opacity-30 lg:hidden"
        />
      </div>
        */}
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto lg:gap-15 flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
          {/* TITLE MOBILE */}
          <h1 className="block text-center w-72 text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Use as
            <br />
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-2.5 left-8 z-0"
              />

              <span className="relative z-10">Extension</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Use as&nbsp;
            <span className="relative inline-block">
              <img
                src={under_md}
                alt=""
                className="absolute -bottom-4 left-10 z-0"
              />

              <span className="relative z-10">Extension</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left text-[64px] w-140.5 font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Use as&nbsp;
            <span className="relative inline-block">
              <img
                src={under2}
                alt=""
                className="absolute bottom-4   z-0"
              />

              <span className="relative z-10">Extension</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-172.75 text-[64px] font-bold leading-auto tracking-[-0.02em] xl:block">
           Use as&nbsp;
            <span className="relative inline-block">
              <img
                src={under2}
                alt=""
                className="absolute -bottom-6 right-50  z-0"
              />

              <span className="relative z-10">Extension</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:hidden">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-140.5 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden w-172.75 mt-6 mb-15 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>
          {/* BUTTON */}
          <button className="mb-15 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white  lg:mx-0 lg:mb-0 xl:mb-0">
            Let’s Go <ArrowRight size={10} />
          </button>
        </div>

        {/* IMAGE COLUMN */}
        <div className=" mx-auto mb-20 md:mb-25 lg:mb-0 lg:mx-0">
          <img
            src={Asset}
            alt="asset"
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-171.25 xl:h-114"
          />
        </div>
      </div>
    </section>
  );
}

export default Use;
