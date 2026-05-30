import App_icon from "../assets/App-icon.png";
import App_icon_md from "../assets/App-icon_md.png";
import App_icon_lg from "../assets/App-icon_lg.png";
import App_icon_xl from "../assets/App-icon_xl.png";
import { ArrowRight } from "lucide-react";
function Try_Whitepace_today() {
  return (
    <section className="relative w-full overflow-hidden bg-[#043873] pt-25 pb-8 px-4 text-white md:px-5 md:pt-35 md:pb-8 lg:px-8 lg:pt-35 lg:pb-8 xl:px-8 xl:pt-35 xl:pb-8 2xl:px-55 2xl:py-35">
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto lg:gap-15 flex w-full flex-col items-center md:items-start lg:flex-col lg:items-center lg:justify-between md:mx-0 ">
        {/* TEXT COLUMN */}
        <div className="flex flex-col items-start xl:mx-auto">
          {/* TITLE MOBILE */}
          <h1 className="block text-left w-72 text-[40px] font-bold leading-13  md:hidden">
            <span className="relative inline-block">Try Whitepace today</span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-left text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            <span className="relative inline-block">Try Whitepace today</span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden mx-auto text-center text-[72px] w-162.5 font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            <span className="relative inline-block">Try Whitepace today</span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-center w-152 mx-auto text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
            <span className="relative inline-block">Try Whitepace today</span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mt-6 mb-10 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] w-full max-w-150 lg:hidden">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-10 mb-10 w-162.5 text-center font-[Inter] text-[24px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden w-266 mt-6 mb-15 text-center font-[Inter] text-[24px] leading-7.5 tracking-[-0.02em] xl:block">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>

          {/* BUTTON */}
          <button className="mb-10 flex items-center text-center w-56 h-15 gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Montserrat] text-[16px] text-white md:w-59.75 md:h-15.75 lg:mx-auto">
            Try Taskey free <ArrowRight size={15} />
          </button>
          {/*second description mobile */}
          <p className=" text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:text-[24px] lg:mx-auto">
            On a big team? Contact sales
          </p>
          {/*app icon*/}
          <img
            src={App_icon}
            alt="App Icon"
            className="md:hidden mt-10 w-46.25 h-9 md:w-65 md:h-15"
          />
          {/*md icon  */}
          <img
            src={App_icon_md}
            alt="App Icon"
            className="hidden md:block mt-10 w-46.25 h-9 md:w-65 md:h-15 lg:mx-auto lg:hidden"
          />
          {/*lg icon  */}
          <img
            src={App_icon_lg}
            alt="App Icon"
            className="hidden lg:block mt-10 lg:w-65 lg:h-15 mx-auto xl:hidden"
          />
          {/*xl icon  */}
          <img
            src={App_icon_xl}
            alt="App Icon"
            className="hidden xl:block mt-10 xl:w-65 xl:h-15 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Try_Whitepace_today;
