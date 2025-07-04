import { Option } from "../components/options";
import berserkPfp from "../assets/berserk.jpeg";
import { IoMdHome } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";

export const SideBar = () => {
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 h-full w-1/5 rounded-r-lg  flex flex-col items-start justify-start transition-all duration-2000 ease-in-out  -translate-x-100 md:translate-x-0 px-3 py-3 bg-[#cdcdcd]">
        {/* Top */}
        <div className="flex items-center justify-between w-full mb-5">
          <span className="text-white bg-[#092952] rounded-md px-3 py-1 flex items-center h-full cursor-pointer">
            Webinar
            <span className=" text-blue-500">.gg</span>
          </span>
          <img
            src={berserkPfp}
            alt="Profile Picture"
            className="h-11 border-none rounded-lg"
          />
        </div>

        <Option title={"Home"} logo={<IoMdHome className="h-5 w-5" />} />
        <Option title={"Webinars"} logo={<FaUsers className="h-5 w-5" />} />
        <Option
          title={"Billing"}
          logo={<AiOutlineCreditCard className="h-5 w-5" />}
        />
        <Option
          title={"User Management"}
          logo={<BiSolidUserAccount className="h-5 w-5" />}
        />
        <Option
          title={"Settings"}
          logo={<IoMdSettings className="h-5 w-5" />}
        />
      </div>
    </>
  );
};
