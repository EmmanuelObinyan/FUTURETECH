import React, { useEffect } from "react";
import NavBar from "../components/layouts/NavBar";
import pic1 from "../assets/newcol1.png";
import { useMediaQuery } from "react-responsive";
import pic2 from "../assets/newscol2.png";
import pic3 from "../assets/newscol3.png";
import aipic from "../assets/AI.png";
import NewsCard from "../components/ui/NewsCard";
import { useObserver } from "../config/ObserverContext";
import Aos from "aos";
import "aos/dist/aos.css";
import MainSectionComp from "../components/ui/MainSectionComp";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import LikeBtn from "../components/ui/LikeBtn";
import CommentBtn from "../components/ui/CommentBtn";
import ShareBtn from "../components/ui/ShareBtn";
import AppButton from "../components/ui/AppButton";
const BlogPost = () => {
  useEffect(() => {
    Aos.init();
  });
  const { observerRef, visible } = useObserver();
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  return (
    <>
      <NavBar />
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
        <div className="bg-[#141414] capitalize font-inter text-white border-b-1 border-[#1e1e1e]">
          <section>
            <img src={aipic}alt="" />
          </section>
          <section className="flex flex-row h-fit w-fit p-6">
            {/* for the reading articles */}
            <figure className="flex flex-col w-[50%] h-fit border-r-1 border-[#1e1e1e]">
              <div className="border-1 border-[#1e1e1e] h-[10rem] p-3">
                <h2 className="font-semibold text-lg py-2">introduction</h2>
                <p className="text-sm text-gray-300 font-light w-[90%] leading-6">
                  Artificial Intelligence (AI) has emerged as a transformative
                  force in the healthcare industry, reshaping patient care,
                  diagnostics, and research. In this blog post, we explore the
                  profound impact of AI in healthcare, from revolutionizing
                  diagnostic accuracy to enhancing patient outcomes.
                </p>
              </div>
              <div className="h-[14rem] p-3 border-1 border-[#1e1e1e] relative ">
                <h2 className="text-lg py-3 ">artificial AI</h2>
                <p className="text-sm font-light text-gray-300 w-[90%] leading-6 ">
                  Artificial Intelligence (AI) has permeated virtually every
                  aspect of our lives, and healthcare is no exception. The
                  integration of AI in healthcare is ushering in a new era of
                  medical practice, where machines complement the capabilities
                  of healthcare professionals, ultimately improving patient
                  outcomes and the efficiency of the healthcare system. In this
                  blog post, we will delve into the diverse applications of AI
                  in healthcare, from diagnostic imaging to personalized
                  treatment plans, and address the ethical considerations
                  surrounding this revolutionary technology.......
                </p>

                <button className="w-fit flex justify-self-center absolute -bottom-3">
                  <AppButton BtnText={"read full blog"} wide={true} />
                </button>
              </div>
            </figure>
            {/* for the likes and publication of date */}
            <figure className="flex flex-col w-[50%]">
              <div className="flex justify-around w-[17rem] h-[4rem] items-center mx-auto justify-self-center p-2 ">
                <LikeBtn likeCount={24.5 + "k"} Like={true} />
                <CommentBtn commentCount={12} />
                <ShareBtn shareCount={206} />
              </div>
              <div></div>
            </figure>
          </section>
        </div>
        {/* section for blogs */}
        <p className="bg-[#141414] text-white font-inter text-lg  px-3 capitalize">
          similar news
        </p>
        <section
          className="grid xs:grid-cols-1 sm:grid-cols-3 place-items-center h-fit bg-[#141414] sm:p-2 md:p-4 lg:p-6 md:gap-3 lg:gap-0 w-full"
          ref={observerRef}
          data-aos-easing="ease-in-out"
          data-aos={visible ? "fade-up" : "fade-down"}
          data-aos-duration="2000"
        >
          <NewsCard
            news_image={pic1}
            news_title="a decisive victory for progressive policies"
            category="politics"
            likeCount={2.2 + "k"}
            shareCount={60}
          />
          <NewsCard
            news_image={pic2}
            news_title="tech giants unveil cutting-edge AI innovations"
            category="technology"
            likeCount={6 + "k"}
            shareCount={92}
          />
          <NewsCard
            news_image={pic3}
            news_title="COVID-19 variants"
            category="health"
            likeCount={10 + "k"}
            shareCount={124}
          />
        </section>
        {/* for the footer section */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default BlogPost;
