import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center lg:justify-between w-full flex-wrap-reverse lg:flex-nowrap">
      <div className="w-full inline-block lg:hidden text-center">
        <button
          onClick={() => navigate("/create-event")}
          className=" px-[70px] py-4 text-white rounded-[10px] font-bold text-xl my-[52px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
        >
          🎉 Create my event
        </button>
      </div>
      <Card />
      <div className="text-center lg:text-right mb-14 lf:mb-0">
        <h1 className="text-[#240D57] text-[64px] font-bold leading-none">
          Imagine if
        </h1>
        <h1 className="text-[#240D57] text-[64px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8]">
          Snapchat
        </h1>
        <h1 className="text-[#240D57] text-[64px] font-bold leading-none">
          had events
        </h1>
        <p className="text-[#4F4F4F] text-2xl mt-4 w-[66%] mx-auto lg:mr-0 font-light">
          Easily host and share events with your friends across any social
          media.
        </p>
        <button
          onClick={() => navigate("/create-event")}
          className="hidden lg:inline-block px-[70px] py-4 text-white rounded-[10px] font-bold text-xl mt-[52px] bg-gradient-to-r from-[#8456EC] to-[#E87BF8]"
        >
          🎉 Create my event
        </button>
      </div>
    </div>
  );
};
