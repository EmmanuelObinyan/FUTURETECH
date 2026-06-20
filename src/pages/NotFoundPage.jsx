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
          <h1 className="text-[8rem] sm:text-[10rem] font-bold leading-none text-yellow-400">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold capitalize mt-4">
            page not found
          </h2>
          <p className="text-gray-500 text-sm max-w-[400px] text-center mt-3 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 bg-[#FFD11A] text-black px-6 py-3 rounded-md font-semibold text-sm capitalize cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-200"
          >
            back to home
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default NotFoundPage;
