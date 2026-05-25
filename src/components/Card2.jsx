import opt from "../assets/opt.svg";

function Card2() {
  return (
    <div className="flex flex-col justify-between w-72.25 rounded-[10px] font-[Inter] text-white px-5 py-5 bg-[#043873] md:w-118 md:px-11 md:py-20 lg:py-20 lg:px-11 lg:w-85.25 lg:h-213.25 xl:w-109.25 xl:h-190.25">
      
      <div className="flex flex-col gap-5 lg:w-55 xl:w-full">
        
        <h1 className="font-semibold text-[24px]">
          Personal
        </h1>

        <h2 className="block text-[36px] font-bold md:hidden">
          $11.2
        </h2>

        <h2 className="hidden text-[36px] font-bold text-[#FFE492] md:block">
          $11.99
        </h2>

        <p className="text-[16px] leading-5">
          Keep home and family on track
        </p>

        <div className="flex flex-col gap-7 text-[16px] leading-5 tracking-[-0.02em]">
          
          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>Sync unlimited devices</p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>10 GB monthly uploads</p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>200 MB max. note size</p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>Customize Home dashboard and access extra widgets</p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>Connect primary Google Calendar account</p>
          </div>

          <div className="flex items-start gap-4">
            <img
              src={opt}
              alt=""
              className="my-auto h-4.5 w-4.5 shrink-0"
            />
            <p>
              Add due dates, reminders, and notifications to your tasks
            </p>
          </div>
          {/* MOBILE BUTTON (< md) */}
<button className="md:hidden w-44.5 h-15.5 flex items-center rounded-lg bg-[#4F9CF9] leading-7.5 px-10 py-4 font-[Inter] text-[18px] text-white md:mb-0 lg:w-45 lg:h-12.75 xl:mb-0 xl:mt-auto">
  Get Started
</button>
        </div>
      </div>

      {/* MD / LG / XL BUTTON (>= md) */}
<button className="hidden md:flex md:mt-5 w-44.5 h-15.5 items-center rounded-lg bg-[#4F9CF9] leading-7.5 px-10 py-4 font-[Inter] text-[18px] text-white md:mb-0 lg:w-45 lg:h-12.75 xl:mb-0 xl:mt-auto">
  Get Started
</button>

    </div>
  );
}

export default Card2;