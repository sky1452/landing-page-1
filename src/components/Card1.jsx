import opt2 from "../assets/opt2.svg";

function Card1() {
  return (
    <div className="flex flex-col gap-5 w-72.25 rounded-[10px] font-[Inter]  border border-[#FFE492] text-black px-5 py-5 bg-white md:w-118 md:px-11 md:py-20 lg:py-10 lg:px-11 lg:w-85.25 lg:h-174.25 xl:w-109.25 xl:h-163.5">
          <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-[24px]">Free</h1>
    
          <h2 className="text-[36px] font-bold md:font-[Montserrat] md:font-normal lg:font-semibold lg:font-[Inter]">$0</h2>
    
          <p className="text-[16px] leading-5">
            Capture ideas and find them quickly
          </p>
    
          <div className="flex flex-col gap-7 leading-5 text-[16px] tracking-[-0.02em]">
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>Sync unlimited devices</p>
            </div>
    
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>10 GB monthly uploads</p>
            </div>
    
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>200 MB max. note size</p>
            </div>
    
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
    
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>Connect primary Google Calendar account</p>
            </div>
    
            <div className="flex items-start gap-4">
              <img src={opt2} alt="" className="my-auto h-4.5 w-4.5 shrink-0" />
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          
          </div>
             <button className="w-45 gap-0 flex items-center rounded-lg bg-white border border-[#FFE492] leading-7.5 px-10 py-4 font-[Inter] text-[18px] text-black lg:w-45 lg:h-12.75">
            Get Started
          </button>
          </div>
          
        </div>
  );
}

export default Card1;
