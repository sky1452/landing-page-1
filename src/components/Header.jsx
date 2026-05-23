    import Logo from "../assets/Logo Icon.svg";
   import { Menu, ArrowRight, ChevronDown } from "lucide-react";
    function Header(){
        return(
            <header className="flex items-center md:h-16.5 h-14 w-full px-4 py-4 justify-between bg-[#043873] lg:h-24 lg:px-8 ">
                <div className="md:w-47.75 md:h-5.6 w-33.5 h-6 gap-2 flex items-center ">{/*Logo*/}
                <img src={Logo} alt="logo" className="w-6 h-4 md:w-7.4 md:h-7.25" />
                <div className="text-white font-bold font-[Inter] text-[19px] md:text-[28px]">whitespace</div>
                    
                </div>
                
                    
                
                {/* DESKTOP */}
                <div className="flex items-center gap-5">

                {/* BUTTONS */}
                <div className="hidden lg:flex items-center gap-6 xl:mx-3">
                {/* a */}
                <div className="hidden xl:flex items-center gap-8 text-white text-[18px] mx-10 font-[DM Sans]">
                <div className="flex items-center gap-2.5">
                    Products <ChevronDown width={30} height={20} />
                </div>
                <div className="font-[DM Sans] flex items-center gap-2.5">
                    Solutions <ChevronDown width={30} height={20} />
                </div>
                <div className=" font-[DM Sans] flex items-center gap-2.5">
                    Resources <ChevronDown width={30} height={20} />
                </div>
                <div className="font-[DM Sans] flex items-center gap-2.5">
                    Pricing <ChevronDown width={30} height={20} />
                </div>
                </div>
                    <button className="font-[Inter] px-10 py-4 rounded-lg bg-[#FFE492] text-black">
                        Login
                    </button>

                    <button className="font-[Inter] px-6 py-4 rounded-lg bg-[#A7CEFC] text-white flex items-center gap-2">
                        Try Whitepace free <ArrowRight size={10} className="" />
                    </button>
                    
                </div>
                
                <Menu color="white" size={42} className="xl:hidden" />

            </div>

                
            </header>
        )
    }
    export default Header