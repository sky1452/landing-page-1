import opt from "../assets/opt.svg";

function Card2() {
  return (
    <div className="flex flex-col gap-5 w-72.25 h-160.5 rounded-[10px] font-[Inter] text-white px-5 py-5 bg-[#043873] lg:mb-0 lg:mx-0 lg:hidden md:block">
      <h1 className="font-semibold text-[24px]">Personal</h1>

      <h2 className="text-[36px] font-bold">$11.2</h2>

      <p className="text-[16px] leading-5">
        Keep home and family on track
      </p>

      <div className="flex w-62.25 h-85 flex-col gap-7 leading-5 text-[16px] tracking-[-0.02em]">
        
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

      </div>

      <button className="w-44.5 h-15.5 flex items-center rounded-lg bg-[#4F9CF9] leading-7.5 px-10 py-4 font-[Inter] text-[18px] text-white md:mb-0 lg:mx-0 lg:mb-0 xl:mb-0">
        Get Started
      </button>
    </div>
  );
}

export default Card2;