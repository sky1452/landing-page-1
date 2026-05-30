import Apple from "../assets/Apple.svg";
import Google from "../assets/Google.svg";
import Microsoft from "../assets/Microsoft.svg";
import Slack from "../assets/Slack.svg";
import under from "../assets/under.svg";

function Our_sponsors() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-20 text-black md:px-5 md:py-35 lg:px-8 lg:py-35 xl:px-8 xl:py-35 2xl:px-55 2xl:py-35">

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 mx-auto flex w-full flex-col items-center lg:items-center ">
        {/* TEXT COLUMN */}
        <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-center">
          {/* TITLE MOBILE */}
          <h1 className="block text-center  text-[36px] font-bold leading-11 tracking-[-0.02em] md:hidden">
            Our&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-3 left-0 z-0 w-full "
              />

              <span className="relative z-10">sponsors</span>
            </span>
          </h1>

          {/* TITLE MD */}
          <h1 className="hidden text-center text-[54px] font-bold leading-11 tracking-[-0.02em] md:block lg:hidden">
           Our&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-6 left-0 z-0 w-full "
              />

              <span className="relative z-10">sponsors</span>
            </span>
          </h1>

          {/* TITLE LG */}
          <h1 className="hidden text-center  text-[64px] font-bold leading-auto tracking-[-0.02em] lg:block xl:hidden">
            Our&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-4 left-0 z-0 w-full "
              />

              <span className="relative z-10">sponsors</span>
            </span>
          </h1>

          {/* TITLE XL */}
          <h1 className="hidden text-center w-175 text-[72px] font-bold leading-auto tracking-[-0.02em] xl:block">
            Our&nbsp;
            <span className="relative inline-block">
              <img
                src={under}
                alt=""
                className="absolute -bottom-3 left-0 z-0 w-full "
              />
              <span className="relative z-10">sponsors</span>
            </span>
          </h1>
        </div>
        {/* IMAGE COLUMN */}
        <div className="grid grid-cols-1 grid-rows-4 gap-25 mt-25 justify-items-center lg:grid-cols-4 lg:grid-rows-1">
            <img src={Apple} alt="Apple" className="w-13.5 md:w-13.5 h-17 " />
            <img src={Microsoft} alt="Microsoft" className="w-53 h-11.5 md:w-71.75 md:h-15.5 " />
            <img src={Slack} alt="Slack" className="w-44 h-11.5 md:w-70 md:h-17.75 " />
            <img src={Google} alt="Google" className="w-34.75 h-11.5 md:w-52.75 md:h-17.5 " />
        </div>
      </div>
    </section>
  );
}
export default Our_sponsors;
