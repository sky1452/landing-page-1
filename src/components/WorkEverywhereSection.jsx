import Blue from "../assets/Blue.svg";
import Blue_md from "../assets/Blue_md.svg";
import Blue_lg from "../assets/Blue_lg.svg";
import Element3_md from "../assets/Element3_md.svg";
import Element3_xl from "../assets/Element_xl.svg";
import { ArrowRight } from "lucide-react";
function Your_Work() {
  return (
    <section className="relative w-full overflow-hidden bg-[#043873] pt-25 pb-35 px-4 text-white md:px-5 md:py-35 lg:px-8 lg:py-35 xl:px-8 xl:py-35 2xl:px-55 2xl:py-35">
      <div className="pointer-events-none absolute inset-0">
        <img
          src={Element3_md}
          alt=""
          className="hidden absolute inset-0 h-140 w-371.25 -left-65 -top-1 opacity-100 md:block lg:hidden"
        />
      </div>
      <div className="pointer-events-none absolute inset-0">
        <img
          src={Element3_xl}
          alt=""
          className="hidden absolute inset-0  h-full w-full -left-150 -top-20  opacity-100 xl:block"
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto lg:gap-15 flex w-full flex-col items-center md:items-start lg:flex-row lg:items-center lg:justify-between md:mx-0 ">
        {/* TEXT COLUMN */}
        <div className="flex flex-col lg:mx-0 items-start xl:mx-auto">
          {/* TITLE MOBILE */}
          <h1 className="block text-left w-72 text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            <span className="relative inline-block">
              Your work, everywhere you are
              <img src={Blue} alt="" className="absolute -bottom-4.5 z-0" />
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-left text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
            Your work, everywhere <br />
            <span className="relative inline-block">
              <img src={Blue_md} alt="" className="absolute -bottom-5 z-0" />
              <span className="relative z-10">you are</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-left text-[64px] w-162.5 font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Your work, everywhere&nbsp;
            <span className="relative inline-block">
              <img src={Blue_lg} alt="" className="absolute top-14 z-0" />
              <span className="relative z-10">you are</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-center w-266 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
            Your work, everywhere&nbsp;
            <span className="relative inline-block">
              <img src={Blue_lg} alt="" className="absolute top-14 z-0" />
              <span className="relative z-10">you are</span>
            </span>
          </h1>

          {/* DESCRIPTION MOBILE/MD */}
          <p className="mt-6 mb-15 text-left font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] w-full max-w-150 lg:hidden">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          {/* DESCRIPTION LG */}
          <p className="hidden mt-6 mb-15 w-162.5 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] lg:block xl:hidden">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          {/* DESCRIPTION XL */}
          <p className="hidden w-266 mt-6 mb-15 text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] xl:block">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>

          {/* BUTTON */}
          <button className="mb-15 flex items-center gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[18px] text-white md:mb-0 lg:mx-0 lg:mb-0 xl:mb-0 xl:mx-auto">
            Try Taskey <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Your_Work;
