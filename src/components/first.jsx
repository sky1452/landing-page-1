import Element from "../assets/Element.svg";
import Element_md from "../assets/Element_md.svg";
import Element_lg from "../assets/Element_lg.svg";
import Asset from "../assets/Asset.svg";
import { ArrowRight } from "lucide-react";

function GetMore() {
  return (
    <section className="relative w-full overflow-hidden bg-[#043873] px-4 pt-20 text-white md:px-5 md:pt-35 lg:px-8 lg:py-35 xl:px-8 xl:py-25">
      {/* BACKGROUND */}
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

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
          {/* TITLE MOBILE */}
          <h1 className="block text-center text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Get More Done
            <br />
            with whitespace
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Get More Done with
            <br />
            whitespace
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left text-[64px] w-140.5 font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Get More Done with whitespace
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-172.75 text-[64px] font-bold leading-auto tracking-[-0.02em] xl:block">
            Get More Done with whitespace
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mx-auto mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:hidden">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-140.5 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden w-172.75 mt-6 mb-15 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          {/* BUTTON */}
          <button className="mb-25 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white  lg:mx-0 lg:mb-0 xl:mb-0">
            Try Taskey free <ArrowRight size={10} />
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

export default GetMore;
