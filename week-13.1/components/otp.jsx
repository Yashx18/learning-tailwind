import { useRef } from "react";

export const OtpComponent = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  return (
    <div className="flex items-center justify-around  py-2 px-3 w-[25%] bg-[#020511] rounded-lg">
      <input
        onDone={(e) => {
          let input = e.target.value;
          console.log(input);
          console.log(typeof input);
          if (typeof input === !Number) {
            console.log("Enter a number");
          } else if (typeof input === Number) {
            ref2.current.focus();
          }
        }}
        type="number"
        ref={ref1}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
      <input
        onDone={() => {
          ref3.current.focus();
        }}
        type="text"
        ref={ref2}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
      <input
        onDone={() => {
          ref4.current.focus();
        }}
        type="text"
        ref={ref3}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
      <input
        onDone={() => {
          ref5.current.focus();
        }}
        type="text"
        ref={ref4}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
      <input
        onDone={() => {
          ref6.current.focus();
        }}
        type="text"
        ref={ref5}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
      <input
        type="text"
        ref={ref6}
        className="w-10 py-2 outline-none text-center  rounded-md bg-[#212327]"
      />
    </div>
  );
};
