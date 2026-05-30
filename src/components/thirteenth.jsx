import Logo from "../assets/Logo Icon.svg";
import { ArrowRight, ChevronDown } from "lucide-react";
import Globe from "../assets/Globe.svg";
import Social_Icon from "../assets/Social_Icon.svg";

function Whitepace() {
  return (
    <div className="bg-[#043873] pt-35 pb-8 px-4 text-white md:px-8 md:pt-20 md:pb-8 lg:px-8 lg:pt-35 lg:pb-8 xl:px-8 xl:pt-35 xl:pb-8 2xl:px-55 2xl:pt-35 2xl:pb-8">
      {/* CONTENT CONTAINER */}

      <div className="lg:flex lg:items-start lg:justify-between">
        <div className="lg:w-64">
          {/*LOGO */}
          <div className="flex items-center">
            <div className="mx-auto flex items-center md:mx-0">
              <img src={Logo} alt="logo" className=" md:w-17 md:h-13.25 lg:w-9.25 lg:h-7.25" />
              <div className="text-white font-bold font-[Inter] text-[28px] md:text-[52px] lg:text-[28px]">
                &nbsp;whitespace
              </div>
            </div>
          </div>

          {/*DESCRIPTION */}
          <p className="mt-6 mb-20 w-64 font-normal mx-auto text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:mx-0  md:text-left md:w-125 md:mb-25 lg:w-60 lg:mb-0 lg:hidden">
            whitepace was created for the new ways we live and work. We make
            beautyfully designed around the world
          </p>
          <p className="mt-6 mb-20 w-64 font-normal mx-auto text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:mx-0  md:text-left md:w-125 md:mb-25 lg:w-60 lg:mb-0 lg:block hidden">
            whitepace was created for the new ways we live and work. We make a better workspace around the world
          </p>
        </div>

        {/* LIST 1 */}
        <div className="flex flex-col items-center gap-3.75  mx-auto mb-20 text-center font-[Inter] text-[18px] md:items-start md:mb-25 lg:mx-0 lg:mb-0 lg:text-[16px]">
          <p className="font-bold">Product</p>
          <p className="text-[#FFE492]">Overview</p>
          <p>Pricing</p>
          <p>Customer stories</p>
        </div>

        {/* LIST 2 */}
        <div className="flex flex-col items-center gap-4  mx-auto mb-20 text-center font-[Inter] text-[18px] md:items-start md:mb-25 lg:mx-0 lg:mb-0 lg:text-[16px]">
          <p className="font-bold">Resources</p>
          <p>Blog</p>
          <p>Guides & tutorials</p>
          <p>Help center</p>
        </div>

        {/* LIST 3 */}
        <div className="flex flex-col items-center gap-4  mx-auto mb-20 text-center font-[Inter] text-[18px] md:items-start md:mb-25 lg:mx-0 lg:mb-0 lg:text-[16px]">
          <p className="font-bold">Company</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Media kit</p>
        </div>

        {/* SECONDARY CONTENT */}
        <div className="flex flex-col items-center gap-5.75  mx-auto mb-20 text-center font-[Inter] text-[18px] md:items-start md:mb-25 lg:mx-0 lg:mb-0">
          {/*TITLE*/}
          <h1 className="font-bold text-[28px] text-center md:ml-7 lg:ml-0">
            Try It Today
          </h1>

          {/*DESCRIPTION*/}
          <p className="w-52 font-normal text-center font-[Inter] text-[18px] leading-7.5 tracking-[-0.02em] md:text-left lg:hidden">
            Get started for free. <br /> Add your whole team as your needs grow.{" "}
          </p>
          {/*DESCRIPTION lg*/}
          <p className="w-52 font-normal text-center font-[Inter] text-[16px] leading-7.5 tracking-[-0.02em] md:text-left lg:block hidden lg:w-64.75">
            Get started for free. Add your whole team as your needs grow.{" "}
          </p>
          {/*BUTTON*/}
          <button className="flex items-center text-center w-49 h-17.5 gap-2.5 rounded-lg bg-[#4F9CF9] px-10 py-5 font-[Inter] text-[16px] text-white  lg:mx-0">
            Start today <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* THIRD CONTENT - MOBILE / MD */}
      <div className="flex flex-col items-center gap-5 mx-auto text-center font-[Inter] text-[16px] lg:hidden">
        {/*LIST*/}
        <div className="flex flex-col items-center gap-5 mx-auto text-center font-[Inter] text-[16px] md:flex-row md:justify-between md:w-full md:mx-0">
          <p>
            <img src={Globe} alt="Globe" className="inline-block" /> English{" "}
            <ChevronDown size={15} className="inline-block" />
          </p>
          <p>Terms & privacy</p>
          <p>Security</p>
          <p>Status</p>
          <p>©2021 Whitepace LLC.</p>
        </div>

        {/*Stick*/}
        <div className="h-px w-full bg-gray-600"></div>

        {/*SOCIAL ICONS*/}
        <img
          src={Social_Icon}
          alt="Social Icon"
          className="w-26.25 h-4 flex md:self-start"
        />
      </div>

      {/* THIRD CONTENT - LG */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-5 lg:mx-auto lg:mt-25 lg:text-center lg:font-[Inter] lg:text-[16px]">
        {/*Stick*/}
        <div className="h-px w-full bg-gray-600"></div>

        <div className="flex items-center justify-between w-full">
          {/*LIST*/}
          <div className="flex items-center gap-8">
            <p>
              <img src={Globe} alt="Globe" className="inline-block" /> English{" "}
              <ChevronDown size={15} className="inline-block" />
            </p>
            <p>Terms & privacy</p>
            <p>Security</p>
            <p>Status</p>
            <p>©2021 Whitepace LLC.</p>
          </div>

          {/*SOCIAL ICONS*/}
          <img src={Social_Icon} alt="Social Icon" className="w-26.25 h-4 flex" />
        </div>
      </div>
    </div>
  );
}

export default Whitepace;