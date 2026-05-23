import Element from "../assets/Element.svg";
import Element_md from "../assets/Element_md.svg";
import Element_lg from "../assets/Element_lg.svg";
import Asset from "../assets/Asset.svg";
import under_md from "../assets/under_md.svg";
import under_lg from "../assets/under_lg.svg";
import under_xl from "../assets/under_xl.svg";
import under from "../assets/under.svg";
import under2 from "../assets/use_under_lg.svg";
import u from "../assets/under_c.svg";
import u_lg from "../assets/u_lg.svg";
import u_xl from "../assets/u_xl.svg";
import { ArrowRight } from "lucide-react";

function Customize() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-25 text-black md:px-5 md:py-35 lg:px-8 lg:py-35 xl:px-8 xl:py-35">
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
      <div className="relative z-10 lg:gap-15 xl:gap-15 mx-auto flex w-full flex-col items-center lg:flex-row lg:items-center">
        {/* IMAGE COLUMN*/}
        <div className="hidden mx-auto mb-15 md:mb-15 lg:mb-0 lg:mx-0 md:hidden">
          <img
            src={Asset}
            alt="asset"
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-171.25 xl:h-114"
          />
        </div>
        {/* TEXT COLUMN */}
        <div className=" mx-auto mb-20 md:mb-25 lg:mb-0 lg:mx-0">
          <img
            src={Asset}
            alt="asset1"
            className="h-47.75 w-71.5 md:h-91.75 md:w-137.75 lg:h-87.5 lg:w-131.5 xl:w-171.25 xl:h-114"
          />
        </div>
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start lg:block">
          {/* TITLE MOBILE */}
          <h1 className="block text-center w-72 text-[40px] font-[Inter] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Customise it
            <br />
            <span className="relative inline-block">
              <img
                src={u}
                alt=""
                className="w-40 absolute -bottom-3 left-31 z-0"
              />

              <span className="relative z-10">to your needs</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-[Inter] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Customise it&nbsp;
          
            <span className="relative inline-block">
              <img
                src={under_md}
                alt=""
                className="absolute w-2/3 -bottom-4 left-40 z-0"
              />

              <span className="relative z-10">to your needs</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left text-[64px] w-123.5 font-bold font-[Inter] tracking-[-0.02em] lg:block xl:hidden">
            Customise it to 
            <br />
            <span className="relative inline-block">
              <img
                src={u_lg}
                alt=""
                className=" absolute -bottom-0.5 z-0"
              />

              <span className="relative z-10">your needs</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-left w-161.5 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
           Customise it to
            
            <span className="relative inline-block">
              <img
                src={u_xl}
                alt=""
                className="absolute top-11/19  z-0"
              />

              <span className="relative z-10"> your needs</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE*/}
          <p className="hidden mx-auto mt-6 mb-15 text-center font-normal font-[Montserrat] text-[18px] leading-7.5 md:hidden">
            Customise the app with plugins, custom themres and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.          </p>

            {/* DESCRIPTION md*/}
          <p className=" mx-auto w-182 mt-6 mb-15 text-center font-normal font-[Inter] text-[18px] leading-7.5 lg:hidden">
            Customise the app with plugins, custom themres and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden w-123.5 mt-6 mb-15 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden w-172.75 mt-6 mb-15 text-left font-[Montserrat] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
          {/* BUTTON */}
          <button className="mb-15 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Montserrat] text-[18px] text-white  md:mb-0 lg:mx-0 lg:mb-0 xl:mb-0">
            Let’s Go <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Customize;
