import "../App.css";
export const Option = ({ title, logo }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full mt-0.75 rounded-lg bg-[#e2e6ec] px-3 py-3 hover:bg-[#a0d0f0] cursor-pointer">
        <span className="font-medium ">{title}</span>
        <span>{logo}</span>
      </div>
    </>
  );
};
