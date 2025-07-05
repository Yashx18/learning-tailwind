import DayInfo from "./dayInfo";
const Scheduler = () => {
  return (
    <>
      <div className=" w-3/10 h-auto bg-[#fefefe] rounded-2xl text-black ">
        <DayInfo />
        <div className="rounded-3xl ">
          <div>Day info</div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
          <div className=" flex items-center justify-between w-full h-4/10">
            <div className="w-3/10 h-5/10 border">Time</div>
            <div className="w-7/10 h-5/10 border">Agenda</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scheduler;
