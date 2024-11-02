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
          'url("https://edams-restaurant.com/wp-content/uploads/2024/01/Edams-R.png")',
        backgroundSize: "cover", // Cover the entire div
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <h1 className="text-[#E3BC7E] text-5xl">EDAM'S</h1>
          <h2 className="text-white text-7xl font-bold">RESTAURANT</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
          <button
            onClick={toEnglish}
            className="bg-[#efc337] px-9 py-5 rounded-md text-2xl"
          >
            English Menu
          </button>
          <button
            onClick={toArabic}
            className="bg-[#efc337] px-9 py-5  rounded-md text-2xl"
          >
            القائمة العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
