import { Button } from "./button";

export const AgeComponent = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-start bg-[#00274e] h-screen w-full pt-10">
        <div className="w-full text-center text-2xl px-4 py-10  ">
          <span className="text-blue-400">Webinar</span>.gg
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Verify Your Age</h1>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm  ">
              Please confirm your birth year. This data will not be stored.
            </p>
            <input
              type="text"
              placeholder="Your Birth Year"
              className="bg-[#18395f] text-gray-300 placeholder-gray-400 py-2 px-3 text-start border-none rounded-lg focus:outline-none w-75 mt-3"
            />
          </div>
          <Button />
        </div>
      </div>
    </>
  );
};
