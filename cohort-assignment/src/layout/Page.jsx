import { Home } from "./Home";
import { SideBar } from "./SideBar";

export const Page = () => {
  return (
    <>
      <div className=" border rounded-lg bg-amber-50 flex items-center justify-center">
        <SideBar />
        <Home />
      </div>
    </>
  );
};
