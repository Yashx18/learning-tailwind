const Meet = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-3/10 h-6/10 border text-black bg-[#fefefe] rounded-3xl border-[#222222]">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
          <div className="col-span-1 flex flex-col items-center justify-center ">
            <span className="h-15 w-15 bg-blue-700 flex items-center justify-center rounded-xl">
              <img src="" alt="" />
            </span>
            <p>Schedule a Webinar</p>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center ">
            <span className="h-15 w-15 bg-blue-700 flex items-center justify-center rounded-xl">
              <img src="" alt="" />
            </span>
            <p>Open a Webinar</p>
          </div>
          <div className="row-span-1 col-span-1 flex flex-col items-center justify-center ">
            <span className="h-15 w-15 bg-blue-700 flex items-center justify-center rounded-xl">
              <img src="" alt="" />
            </span>
            <p>Open Recordings</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
