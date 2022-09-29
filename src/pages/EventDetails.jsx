import React from "react";
import {
  CalenderIcon,
  EventCard,
  LocationIcon,
  RightArrow,
} from "../assets/images";

export const Event = () => {
  const birthday = JSON.parse(localStorage.getItem("event"));
  const { name, fileUpload, host, location, start, end } = birthday;
  console.log("data", fileUpload);

  return (
    <div className="space-x-0 lg:space-x-24 pb-[80px] lg:pb-[0] m-auto lg:mt-28 flex justify-center flex-wrap-reverse lg:flex-nowrap w-full sm:w-[60%] lg:w-full sm:pt-14">
      <div className="w-full lg:w-[30%] px-5 lg:px-0">
        <h1 className="text-[#240D57] text-3xl sm:text-5xl">{name}</h1>
        <span className="text-[#828282] inline-block mt-4">
          👋 Hosted by <span className="font-bold">{host}</span>
        </span>
        <div className="space-y-4 mt-14">
          <div className="flex">
            <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[10px] p-[14px] flex">
              <img src={CalenderIcon} alt="" />
            </div>
            <div className="w-full mx-5">
              <h2 className="text-[#240D57] text-base font-bold">{start}</h2>
              <span className="text-[#828282]">
                to <span className="font-bold">{end}</span> UTC +10
              </span>
            </div>
            <img src={RightArrow} alt="" />
          </div>
          <div className="flex">
            <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[10px] p-[14px] flex">
              <img src={LocationIcon} alt="" />
            </div>
            <div className="w-full mx-5">
              <h2 className="text-[#240D57] text-base font-bold">
                Street Name
              </h2>
              <span className="text-[#828282]">{location}</span>
            </div>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[33%] mb-4 lg:mb-0">
        <img src={EventCard} alt="" className="w-full" />
      </div>
    </div>
  );
};
