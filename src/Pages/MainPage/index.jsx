import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const toEnglish = () => {
    navigate("/englishmenu");
  };
  const toArabic = () => {
    navigate("/arabicmenu");
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/premium-photo/black-stone-surface-background_1076581-1354.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 h-screen"></div>
      <div className="relative z-10 flex flex-col justify-center items-center gap-8 p-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[#E3BC7E] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">EDAM'S</h1>
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">RESTAURANT</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <button
            onClick={toEnglish}
            className="bg-[#efc337] px-8 py-4 rounded-md text-xl sm:text-2xl w-full max-w-xs"
          >
            English Menu
          </button>
          <button
            onClick={toArabic}
            className="bg-[#efc337] px-8 py-4 rounded-md text-xl sm:text-2xl w-full max-w-xs"
          >
            القائمة العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
