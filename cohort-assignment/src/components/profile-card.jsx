// This is just me building a card component from a Design i saw online.
// https://dribbble.com/shots/26042325-Dark-or-Light

import girlPic from "../assets/girl-square.JPG";
import plusIcon from "../assets/plus.svg";
import collectionIcon from "../assets/collection-multiple.svg";
import userIcon from "../assets/user-svgrepo.svg";

export const ProfileCard = ({
  name,
  about,
  followers,
  completed,
  verified,
}) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-2 bg-[#2f2f2f] border-none 
      h-6/10 w-4/5 sm:w-1/2 md:2/5 lg:2/10

    rounded-4xl"
    >
      {/* Profile Section */}
      <div className="Pfp border-none h-full w-full rounded-3xl">
        <img
          src={girlPic}
          alt="Profile Picture"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      {/* Text Section */}
      <div className="w-full px-5 py-5">
        <div className="info flex flex-col items-start gap-1">
          <h1 className="flex items-center">
            <span className="align-middle text-[#f9f9f9] text-xl  font-semibold ">
              {name}
            </span>
            <img
              src={verified}
              alt="Verified Badge"
              className="h-5 w-5 ml-2 align-middle relative top-[1px]"
            />
          </h1>
          <p className="text-sm font-medium text-[#909090] ">{about}</p>
        </div>
        <div className="social-info flex w-full items-center justify-between h-auto mt-4 text-sm">
          <span className="flex items-center text-[#f9f9f9]">
            <img src={userIcon} className="h- w-4 mr-1 " />
            {followers}
          </span>
          <span className="flex items-center text-[#f9f9f9] py-3">
            <img src={collectionIcon} className="h-4 w-4 mr-1" />
            {completed}
          </span>
          <button className="flex items-center justify-between text-[#f9f9f9] shadow-[0_0_12px_rgba(0,0,0,0.3)] px-5 py-2 rounded-4xl bg-[#343434] cursor-pointer font-semibold">
            <span>Follow</span>
            <img src={plusIcon} className="h-6 w-6 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
