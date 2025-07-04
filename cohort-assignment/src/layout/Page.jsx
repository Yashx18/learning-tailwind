import { Home } from "./Home";
import { SideBar } from "./SideBar";

export const Page = () => {
  return (
    <>
      <div className=" bg-[#1f1f1f] flex items-center  justify-center h-screen w-full  relative">
        <SideBar />
        <Home />
      </div>
    </>
  );
};
