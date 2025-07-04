import berserkPfp from "../assets/berserk.jpeg";

export const Profile = ({ name, email, number, location }) => {
  return (
    <div className="w-50 h-auto rounded-2xl  flex flex-col items-center justify-center bg-gray-700 py-5 ">
      <div>
        <img
          src={berserkPfp}
          alt="Profile Picture"
          className="h-30 border-none rounded-xl"
        />
      </div>
      <div className="flex  flex-col items-center justify-center  text-gray-300">
        <span className="text-black font-bold text-xl">{name}</span>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{number}</p>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};
