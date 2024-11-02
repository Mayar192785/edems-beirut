import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EnglishMenu = () => {
  const navigate = useNavigate();
  const toHome = () => {navigate("/");};
  useEffect(() =>{
    AOS.init();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center bg-[#3a383a]">
      <div
        style={{
          width: "100%",
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/black-stone-surface-background_1076581-1354.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <img
          src="https://edams-restaurant.com/wp-content/uploads/2024/01/cropped-EDAMS-FAV-ICON.png"
          alt="name"
          data-aos="fade-up"
        />
        <div className="absolute top-8 left-4 text-white">
          <button onClick={toHome}>Back</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4 mb-8" data-aos="fade-up">
        <h1 className="text-[#E3BC7E] text-4xl">EDAM'S</h1>
        <h2 className="text-white text-3xl font-bold">English Menu</h2>
      </div>

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center" data-aos="fade-up">Breakfast</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Omelete</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Fried eggs</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Scrambled eggs</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Sojok eggs</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kawerma eggs</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Shakshouka</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Lebanese foul</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Lebanese msabbaha</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Fattet homous</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Fattet homous lahme and snawbar</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Chanklish</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Mana2ish</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Falafel</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Labneh</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Labneh beiruti</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Grilled haloumi</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Makdous</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* Soup */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Soup</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Lentil soup</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Chicken soup</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* Salad */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Salad</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Fattouch</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Tabbouleh</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Rocca salad</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Falafel salad</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Edam's salad</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* cold appet */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">
          Cold Appetizers
        </h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Homous</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Homous bel l7ma wel znawbar</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Mtabbal</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Baba ghanouj</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Wara2 3enab bel zeit</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Chanklish</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Labneh</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Labneh beiruit</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Labneh m3ez</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Mhammara</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Fattet homous</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Ardi shouki</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Loubye b zet</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Shmandar</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Mini sandwiches</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Labneh w zaatar</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* Raw meat */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Raw Meat</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kebbeh naye</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kebbeh frake</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Habre naye</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kafta naye</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Edam's boat mixed raw</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* Hot appet */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">
          Hot Appetizers
        </h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Batata Harra</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kebeh</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Sambousek jeben</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Sambousek lahme</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Mkanek</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Soujouk</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">French fries</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Grilled haloumi</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Trabelseyye</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Cheese rolls</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Pastrami cheese rolls</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Grilled haloumi pesto</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Ras 3asfour</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Ras 3asfour red pesto</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* Main dish */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Main Dish</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Grilled chicken</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Djaj mtafa</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Shish tawook</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kafta</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Riyash</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Mixed grill boat</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Lahme b karaz</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Rezz 3a djaj</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Ouzi markouk bread</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kabab</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Kabse djaj</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Buftik mtafa</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">3areys kafta</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Wara2 3enab l7meh</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Kebbe zghertewiye</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="font-bold text-white">Ardi chawki b l7meh</p>
          <p className="font-bold text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="  text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* Sides */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Sides</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Sahen khoudra</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Sahen kabiss</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Toum</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Debs el remen</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Coleslaw</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <hr className="mt-10 h-4 w-full" />

      {/* dessert */}

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl px-4 text-center">Dessert</h2>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">San sebastien</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Knafa beiruti</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Ghazal el banat</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Rez b halib</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Halwet b jeben</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>

      <div class="w-full md:w-5/12 mt-8 px-2" data-aos="fade-up">
        <div className="flex justify-between items-center font-bold text-xl py-2">
          <p className="text-white">Osmaliyeh</p>
          <p className="text-[#E3BC7E]">EGP 250</p>
        </div>
        <p className="text-white text-md p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          molestiae quod amet sit facilis illo non fugit quisquam aut
          dignissimos ratione labore, provident doloremque nemo voluptatum,
          obcaecati eaque atque.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EnglishMenu;
