import React from "react";
import Footer from "../../Components/Footer";
import BackButton from "../../Components/back_button";

const ArabicMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#3a383a]">
      <div
        style={{
          width: "100%",
          backgroundImage:
            'url("https://img.freepik.com/premium-photo/black-stone-surface-background_1076581-1354.jpg")',
          backgroundSize: "cover", // Cover the entire div
          backgroundPosition: "center", // Center the image
          display: "flex", // Make div a flex container
          alignItems: "center", // Center vertically
          justifyContent: "center", // Center horizontally
        }}
      >
        <img
          src="https://edams-restaurant.com/wp-content/uploads/2024/01/cropped-EDAMS-FAV-ICON.png"
          alt="name"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <h1 className="text-[#E3BC7E] text-4xl">EDAM'S</h1>
        <h2 className="text-white text-3xl font-bold">القائمة العربية</h2>
      </div>

      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">الفطار</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">اومليت</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بيض مقلي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بيض مخفوق</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بيض بالسجق</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بيض بالكاويرما</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شكشوكة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فول لبناني</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مسبحة لبناني</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فتة حمص</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فتة حمص لحم وصنوبر</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شنكليش</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مناقيش</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فلافل</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة بيروتي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">حلومي مشوي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مكدوس</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* soup */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">الشوربة</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شوربة عدس</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شوربة دجاج</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* salad */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">السلطات</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فتوش</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">تبولة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سلطة جرجير</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سلطة فلافل</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سلطة ايدام</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* cold appet */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">مقبلات باردة</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">جمص</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">حمص باللحمة و الصنوبر</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">متبل</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بابا غنوج</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ورق عنب بالزيت</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شنكليش</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة بيروتي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة ماعز</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">محمرة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">فتة حمص</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ارضي شوقي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لوبة بالزيت</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شمندر</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سندوتشات صغيرة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* raw meat */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">لحمة نية</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لبنة و زعتر</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كبة نية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كبة فريك</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">هبرة نية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كفتة نية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مركب ايدام ممشكل لحم ني</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* hot appet */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">مقبلات حارة</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">يطاطا حارة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كبة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سمبوسك جبنة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سمبوسك لحمة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مكانك</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سجق</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">اصابع البطاطا المقلية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">حلومي مشوي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ترابلسية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">رولز جبنة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">رولز جبنة بالبسطرمة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">حلومي مشوي بالبيستو</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">راس عصفور</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">راس عصفور بالبيستو الاحمر</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* main dish */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">
          الأطباق الرئيسية
        </h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">دجاج مشوي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">دجاج مطافي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">شيش طاووق</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كفتة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ريش</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">مركب مشوي مشكل</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">لحمة بالكرز</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">رز و دجاج</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">اوزي خبز مرقوق</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كباب</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كبسة دجاج</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">بوفتيك مطافي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كفتة عرايس</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ورق عنب باللحم</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كبة زغرتوية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ارضي شوكي باللحمة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* sides */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">أطباق جانبية</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">صحن خضرة</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">صحن كبس</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">ثوم</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">دبس رمان</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كول سلو</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <hr className="mt-10 h-4 w-full" />

      {/* dessert */}
      <div className="text-center p-2 mt-8 mb-4">
        <h2 className="text-[#E3BC7E] text-4xl font-bold pe-4">الحلويات</h2>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">سان سبستيان</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">كنافة بيروتي</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">غزل البنات</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">رز بالحليب</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">حلاوة بجبن</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>

      <div className="w-full px-2 md:px-0 md:w-5/12 mt-8">
        <div className="flex justify-between items-center font-bold text-2xl py-2">
          <p className="text-[#E3BC7E]">275 EGP</p>
          <p className="text-white">اوسمالية</p>
        </div>
        <div className="text-white text-end py-2">
          لنص الوصفي هو النص الذي يصف به الكاتب مكاناً، أو شيئاً معيناً، أو
          شخصاً ما بشكل دقيق جدًا بذكر التفاصيل المختلفة بهدف إيصال القارئ
          لمرحلة يستطيع بها تشكيل صورة ذهنية مفصلة عن ما يقرؤه
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArabicMenu;
