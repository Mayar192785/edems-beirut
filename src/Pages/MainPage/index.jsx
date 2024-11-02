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
      <div className="relative z-10 flex flex-col justify-center items-center gap-3">
        <button onClick={toEnglish} className="bg-[#efc337] px-6 py-3 rounded-lg text-xl">
          English Menu
        </button>
        <button onClick={toArabic} className="bg-[#efc337] px-6 py-3  rounded-lg text-xl">
          Arabic Menu
        </button>
      </div>
    </div>
  );
};

export default MainPage;
