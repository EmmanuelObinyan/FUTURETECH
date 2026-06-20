import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        <div className="bg-[#141414] min-h-[70vh] flex flex-col items-center justify-center text-white px-6 py-16">
          <div className="relative">
            <h1 className="xs:text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-yellow-400 select-none">
              404
            </h1>
            <div className="w-full h-[2px] bg-yellow-400 opacity-40 mt-[-1rem]"></div>
          </div>

          <div className="text-center mt-6">
            <span className="bg-[#333333] capitalize w-fit px-3 py-1 mb-4 inline-block xs:text-xs sm:text-sm lg:text-md rounded-sm">
              page not found
            </span>
            <h2 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold capitalize mb-4">
              oops! you've ventured into the unknown
            </h2>
            <p className="text-gray-500 xs:text-ss sm:text-xs lg:text-sm max-w-[500px] mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Don't worry, even the best explorers lose their way sometimes.
              Let's get you back on track.
            </p>
          </div>

          <div className="flex xs:flex-col sm:flex-row gap-4 mt-10 items-center">
            <button
              className="capitalize bg-[#FFD11A] text-black px-6 py-3 rounded-md font-semibold xs:text-ss md:text-xs lg:text-sm transition-all ease-in-out duration-300 hover:opacity-60 active:scale-95 cursor-pointer"
              onClick={() => navigate("/")}
            >
              back to home
            </button>
            <button
              className="capitalize border border-[#333333] text-white px-6 py-3 rounded-md font-semibold xs:text-ss md:text-xs lg:text-sm transition-all ease-in-out duration-300 hover:opacity-60 active:scale-95 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              go back
            </button>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default NotFoundPage;
