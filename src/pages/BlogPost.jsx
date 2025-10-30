import React, { lazy, useEffect } from "react";
import NavBar from "../components/layouts/NavBar";
import pic1 from "../assets/newcol1.png";
import { useMediaQuery } from "react-responsive";
import pic2 from "../assets/newscol2.png";
import pic3 from "../assets/newscol3.png";
import AI from "../assets/aiintelligence.jpg";
import NewsCard from "../components/ui/NewsCard";
import { useObserver } from "../config/ObserverContext";
import Aos from "aos";
import { useParams } from "react-router-dom";
import "aos/dist/aos.css";
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
  // for the blog post
  const ID=useParams()
  return (
    <>
      <NavBar />
      <section className="xs:mt-29 sm:mt-33 lg:mt-38">
        <div className="bg-[#141414] capitalize font-inter text-white border-b-1 border-[#1e1e1e] mb-3">
          <section className="h-fit relative">
            <img
              src={AI}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className="xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover"
            />
            {/* for the blog post introduction */}
            <p className="font-semibold xs:text-xl sm:text-3xl md:text-4xl lg:text-6xl absolute xs:bottom-0 sm:bottom-2 md:bottom-3 lg:bottom-5 flex justify-self-center xs:p-1 md:p-2 w-fit text-center ">
              rise of artificial intelligence in the health sector
            </p>
          </section>
          <section className="flex xs:flex-col sm:flex-row  h-fit w-fit p-6">
            {/* for the blogpost reading articles */}
            <figure className="flex flex-col xs:w-[100%] sm:w-[50%] h-fit border-r-1 border-[#1e1e1e]">
              <div
                className="border-1 border-[#1e1e1e] lg:h-[10rem] p-3 "
                data-aos={visible ? "fade-down" : "fade-up"}
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                ref={observerRef}
              >
                <h2 className="font-semibold xs:text-sm md:text-md lg:text-lg py-2">
                  introduction
                </h2>
                <p className="xs:text-ss sm:text-xs lg:text-sm text-gray-400 font-light sm:w-[90%] md:leading-5 lg:leading-6">
                  Artificial Intelligence (AI) has emerged as a transformative
                  force in the healthcare industry, reshaping patient care,
                  diagnostics, and research. In this blog post, we explore the
                  profound impact of AI in healthcare, from revolutionizing
                  diagnostic accuracy to enhancing patient outcomes.
                </p>
              </div>
              <div
                className="lg:h-[14rem] p-3 border-1 border-[#1e1e1e] relative  "
                ref={observerRef}
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos={visible ? "fade-down" : "fade-up"}
                data-aos-duration="2000"
              >
                <h2 className=" xs:text-sm md:text-md lg:text-lg py-1.5 sm:py-3 ">
                  artificial AI
                </h2>
                <p className="xs:text-ss sm:text-xs lg:text-sm font-light text-gray-400 sm:w-[90%] md:leading-5 lg:leading-6 ">
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

                <button className="w-fit flex justify-self-center absolute sm:-bottom-3 ">
                  <AppButton BtnText={"read full blog"} wide={true} />
                </button>
              </div>
            </figure>
            {/* for the likes and publication of date */}
            <figure
              className="flex flex-col mt-7.5 sm:mt-0 sm:w-[50%]"
              ref={observerRef}
              data-aos-delay="1200"
              data-aos={visible ? "fade-down" : "fade-up"}
              data-aos-duration="2000"
            >
              <div className="flex justify-around xs:w-[19rem] sm:w-[15rem] lg:w-[17rem] h-[4rem] items-center mx-auto p-2  mt-4">
                <LikeBtn likeCount={24.5 + "k"} Like={true} />
                <CommentBtn commentCount={12} />
                <ShareBtn shareCount={206} />
              </div>
              <div className="flex flex-row xs:w-[20rem] sm:w-[70%] md:w-[50%] lg:w-[30%] justify-between mx-auto ">
                <figure className="">
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    publication date
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">october 15,2023</p>
                </figure>
                <figure>
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    category
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">healthcare</p>

                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    author name
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">dr.emily walker</p>
                </figure>
              </div>
            </figure>
          </section>
        </div>
        {/* section for blogs */}
        <p className="bg-[#141414] text-white font-semibold font-inter md:text-md lg:text-lg  px-3 capitalize">
          similar news
        </p>
        <section
          className="grid xs:grid-cols-1 sm:grid-cols-3 place-items-center h-fit bg-[#141414] sm:p-2 md:p-4 lg:p-6 md:gap-3 lg:gap-0 w-full"
          ref={observerRef}
          data-aos-easing="ease-in-out"
          data-aos={visible ? "fade-down" : "fade-up"}
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
