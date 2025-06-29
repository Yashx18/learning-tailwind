import "../App.css";
export const Option = ({ title, logo }) => {
  return (
    <>
      <div className="flex items-center justify-between w-full border rounded-md bg-[#e2e6ec]">
        <span className="font-bold ">{title}</span>
        <img src={logo} className="logo" />
      </div>
    </>
  );
};
