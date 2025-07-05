import berserkPfp from "../assets/berserk.jpeg";

export const Profile = ({ name, email, number, location }) => {
  return (
    <div className="relative -top-8 w-50 h-5/10 rounded-2xl  flex flex-col items-center justify-center bg-[#fefefe] ">
      <div>
        <img
          src={berserkPfp}
          alt="Profile Picture"
          className="h-30 border-2 border-[#212121] rounded-xl"
        />
      </div>
      <div className="flex  flex-col items-center justify-center  text-gray-300">
        <span className="text-[#252525] font-bold text-xl">{name}</span>
        <p className="text-[#424242] text-sm">{email}</p>
        <p className="text-[#424242] text-sm mb-1">{number}</p>
        <p className="text-[#424242] text-md">{location}</p>
      </div>
    </div>
  );
};
