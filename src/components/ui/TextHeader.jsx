import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useObserver } from "../../config/ObserverContext";
import { useEffect } from "react";
const TextHeader = ({ news_header, news_text }) => {
  const{visible,observerRef}=useObserver()
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
       ref={observerRef}
      className="bg-[#141414] capitalize md:justify-center h-fit md:h-[13rem] lg:h-[15rem] p-5 md:items-end flex xs:flex-col md:flex-row text-white font-inter border-b-1 border-[#1e1e1e]"
      data-aos={visible ? "fade-up":"fade-down"}
      data-aos-easing="ease-in-out"
      data-aos-duration="1000"
    >
      <section className="md:ml-[8%]">
        <h2 className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl p-2 font-medium xs:w-[100%] sm:w-[fit] md:w-[90%] lg:w-[90%] xs:leading-10 sm:leading-11 md:leading-14 lg:leading-17">
          {news_header}
        </h2>
      </section>
      <section className="w-fit md:-ml-[5%] lg:-ml-[20%]">
        <p className="xs:text-ss sm:text-xs  lg:text-sm p-2 text-gray-500 font-medium md:w-[100%] lg:w-[90%]">
          {news_text}
        </p>
      </section>
    </div>
  );
};

export default TextHeader;
