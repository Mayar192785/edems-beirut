import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative text-white w-full py-6 px-4 overflow-hidden mt-20">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0"
        style={{
        backgroundImage:
            'url("https://img.freepik.com/premium-photo/black-stone-surface-background_1076581-1354.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5, // Adjust the opacity as needed
        }}
      ></div>

      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Footer Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center space-y-4 text-center md:text-left md:flex-row md:justify-between md:space-y-0">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">Edams Beirut</h2>
          <p className="mt-2 text-sm">
            Delicious food, cozy atmosphere, and unforgettable memories.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-2 text-sm">📍 Egypt, Cairo</p>
          <p className="text-sm">📞 +961 123 456</p>
          <p className="text-sm">✉️ info@edamsbeirut.com</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-200" aria-label="Facebook">
            🌐 Facebook
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Instagram">
            🌐 Instagram
          </a>
          <a href="#" className="hover:text-gray-200" aria-label="Twitter">
            🌐 Twitter
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="relative mt-6 text-center">
        <button
          onClick={scrollToTop}
          className="bg-white text-[#efc337] rounded-full px-6 py-2 text-sm font-semibold shadow-md hover:bg-gray-200 transition-all duration-200"
        >
          Back to Top
        </button>
      </div>

      <p className="relative text-center mt-6 text-sm text-gray-100">
        © {new Date().getFullYear()} Edams Beirut. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
