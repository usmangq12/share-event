import React from "react";
import {
  CalenderIcon,
  EventCard,
  LocationIcon,
  RightArrow,
} from "../assets/images";

export const Card = () => {
  return (
    <div className="max-w-[440px] rounded-[35.1522px] font-[Helvetica] overflow-hidden mb-5 lg:mb-0">
      <img src={EventCard} alt="" className="h-[375px] w-full" />
      <div className="py-9 px-5 bg-white">
        <h1 className="text-[#240D57] text-5xl">Movie Night</h1>
        <span className="text-[#828282] inline-block mt-4">
          👋 Hosted by <span className="font-bold">Elysia</span>
        </span>
        <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[10px] p-[14px] flex items-center justify-between my-8">
          <span className="text-[#240D57] font-bold inline-block">
            14
            <span className="font-light mx-1">responses</span>.{" "}
            <span className="text-[#8456EC] ml-1">see guest</span>
          </span>
          <button className="text-white bg-[#8456EC] py-2 px-3 rounded-[10px] font-bold">
            🤝 Invite
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex">
            <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[10px] p-[14px] flex">
              <img src={CalenderIcon} alt="" />
            </div>
            <div className="w-full mx-5">
              <h2 className="text-[#240D57] text-base font-bold">
                18 August 6:00PM
              </h2>
              <span className="text-[#828282]">
                to <span className="font-bold">19 August 1:00PM</span> UTC +10
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
                Street name
              </h2>
              <span className="text-[#828282]">Suburb, State, Postcode</span>
            </div>
            <img src={RightArrow} alt="" />
          </div>
          <div className="flex">
            <div className="bg-white shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[10px] p-[14px] flex">
              <img src={CalenderIcon} alt="" />
            </div>
            <div className="w-full mx-5">
              <h2 className="text-[#240D57] text-base font-bold">Link</h2>
              <span className="text-[#828282]">netflex.com</span>
            </div>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
