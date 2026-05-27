import opt from "../assets/opt.svg";
import Quote_white from "../assets/Quote_white.png";
import Avatar_3 from "../assets/Avater_3.png";
function Client_comment3() {
  return (
    <div className="flex flex-col bg-[#4F9CF9] text-white font-[Inter] px-5 py-5 w-72 h-114.5 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:w-118 lg:shadow-none lg:py-15 lg:px-4 lg:w-85.25 lg:h-140 xl:w-109.25 xl:h-124.5 xl:px-6">
      {/*content container*/}

      {/*QUotE ICON and description*/}
      <div className="flex flex-col gap-8 pb-10 ">
        <img
          src={Quote_white}
          alt=""
          className="h-12 w-12 flex xl:w-21.5 xl:h-15.25"
        />
        {/*m,md */}
        <p className="w-62 text-[16px] leading-5 tracking-[-0.02em] md:w-full lg:w-73 lg:h-30 lg:hidden">
          Taskkey is designed as a collaboration tool for businesses that is a
          full project management solution.
        </p>
        {/*lg */}
        <p className="w-62 text-[16px] leading-5 tracking-[-0.02em] lg:block hidden xl:w-95.75">
          Whitepate is designed as a collaboration tool for businesses that is a
          full project management solution.
        </p>
      </div>
      {/*Stick*/}
      <div className="h-px w-full bg-white mb-10"></div>
      {/*Author*/}
      <div className="flex flex-row gap-6">
        <img
          src={Avatar_3}
          alt=""
          className="h-16.25 w-16.25 rounded-full mb-4 md:w-20 md:h-20 lg:w-23.5 lg:h-23.5"
        />
        {/*Author name and description*/}
        <div className="flex flex-col ">
          <h3 className="font-bold text-[18px] leading-9 tracking-[-0.02em] mb-3.75 text-[#043873] md:text-[24px]">
            Oberon Shaw, MCH
          </h3>
          <p className="text-[16px] w-62 leading-7.5 tracking-[-0.02em] md:w-full lg:w-43.5 lg:leading-5 ">
            Head of Talent Acquisition, North America
          </p>
        </div>
      </div>
    </div>
  );
}

export default Client_comment3;
