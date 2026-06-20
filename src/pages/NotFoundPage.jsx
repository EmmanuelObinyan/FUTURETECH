import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/layouts/NavBar";
import Footer from "../components/layouts/Footer";
import AppButton from "../components/ui/AppButton";
import { BsArrowLeft } from "react-icons/bs";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        <div className="bg-[#141414] min-h-[70vh] flex flex-col items-center justify-center text-white font-sans px-6 py-16 relative overflow-hidden">

          {/* 404 number */}
          <div className="relative">
            <h1 className="xs:text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none text-yellow-400 select-none">
              404
            </h1>
            <div className="w-full h-[2px] bg-yellow-400 opacity-40 mt-[-1rem]"></div>
          </div>

          {/* error message */}
          <div className="text-center mt-6">
            <button className="bg-[#333333] capitalize w-fit px-3 py-1 mb-4 xs:text-xs sm:text-sm lg:text-md rounded-sm">
              page not found
            </button>
            <h2 className="xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold capitalize mb-4">
              oops! you've ventured into the unknown
            </h2>
            <p className="text-gray-500 xs:text-ss sm:text-xs lg:text-sm max-w-[500px] mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
              Don't worry, even the best explorers lose their way sometimes.
              Let's get you back on track.
            </p>
          </div>

          {/* action buttons */}
          <div className="flex xs:flex-col sm:flex-row gap-4 mt-10 items-center">
            <div
              className="flex items-center gap-2 cursor-pointer capitalize bg-[#FFD11A] text-black px-6 py-3 rounded-md font-semibold xs:text-ss md:text-xs lg:text-sm transition-all ease-in-out duration-300 hover:opacity-60 active:scale-95"
              onClick={() => navigate("/")}
            >
              <BsArrowLeft className="text-lg" />
              <p>back to home</p>
            </div>
            <AppButton
              BtnText="contact us"
              iconArrow={true}
              BtnFunction={() => navigate("/contact")}
            />
          </div>

          {/* quick links */}
          <div className="mt-14 text-center">
            <p className="text-gray-600 xs:text-ss sm:text-xs lg:text-sm mb-4 capitalize">
              or explore these pages
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "news", link: "/news" },
                { name: "podcasts", link: "/podcasts" },
                { name: "resources", link: "/resources" },
                { name: "profile", link: "/profile" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate(item.link)}
                  className="capitalize text-gray-400 border border-[#1e1e1e] bg-[#1e1e1e] hover:border-yellow-400/30 hover:text-yellow-400 px-4 py-2 rounded-md xs:text-ss sm:text-xs lg:text-sm transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default NotFoundPage;
