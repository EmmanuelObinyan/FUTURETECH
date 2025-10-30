import React from "react";
import NavBar from "../components/layouts/NavBar";
import { useEffect, useRef } from "react";
import LikeBtn from "../components/ui/LikeBtn";
import { useTab } from "../config/TabContext";
import ShareBtn from "../components/ui/ShareBtn";
import CommentBtn from "../components/ui/CommentBtn";
import AppButton from "../components/ui/AppButton";
import { useObserver } from "../config/ObserverContext";
import { FaCamera } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import FooterPart from "../components/ui/FooterPart";
import { Link } from "react-router-dom";
import biotech from "../assets/biotech.jpg";
import Footer from "../components/layouts/Footer";
const ProfilePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // ref for the profile picture
  const ProfileRef = useRef(null);
  const { BlogArr } = useTab();
  const { visible, observerRef } = useObserver();
  const isArray = true;
  return (
    <>
      <NavBar />
      <section className="xs:mt-28 sm:mt-32 lg:mt-37 text-white capitalize font-inter">
        <div
          className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-3 border-b-1 border-[#1e1e1e] bg-[#141414] py-2 "
          ref={observerRef}
          data-aos={visible ? "fade-left" : "fade-right"}
          data-aos-easing="ease-in-out"
        >
          {/* profile image */}
          <aside className="xs:h-[8rem] sm:h-[9rem] md:h-[10rem] lg:h-[17rem] xs:w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[17rem] rounded-full relative border-1 ">
            <img
              src={biotech}
              alt=""
              className="h-full rounded-full w-full object-center"
            />
            <FaCamera
              className="xs:text-xl sm:text-2xl lg:text-3xl  absolute bottom-[2%] right-[12%] z-10 transition-all ease duration-800  active:text-yellow-400"
              onClick={() => ProfileRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={ProfileRef}
            />
          </aside>

          <div className="w-fit ">
            {/* profile name */}
            <p className="font-semibold xs:text-md sm:text-lg md:text-xl lg:text-3xl p-2 text-center md:text-left">
              {isArray ? "john micheal" : "add profile name"}
            </p>
            {/* personal bio */}
            <p className="xs:w-[90%] sm:w-[60%] md:w-[80%] lg:w-[75%] text-slate-300 xs:text-ss sm:text-sm italic font-medium p-2 mx-auto md:mx-0 text-center md:text-left">
              {isArray
                ? "i love to sing and i love writing novels, and i also love to cook very well"
                : "add bio"}
            </p>
            {/* profile status */}
            <p className="font-medium text-slate-300  text-center md:text-left text-xs sm:text-sm md:text-md p-2">
              {isArray ? "an undergraduate student" : "add employee status"}
            </p>
            {/* for the profile email,country and phone number */}
            <aside className="flex p-2 mt-3 sm:mt-5 text-xs sm:text-sm  sm:items-center justify-self-center justify-between text-slate-200 font-semibold gap-3 w-fit lg:w-[30rem] flex-col sm:flex-row">
              <p>emmanuelobinyan936@gmail.com</p>
              <p>{isArray ? "+234 9038773144" : "phone"}</p>
              <p>{isArray ? "nigerian" : "nationality"}</p>
            </aside>
          </div>
          <Link
            to={"/personalinfo"}
            className="text-sm lg:text-lg font-medium text-slate-300 lg:p-3 transition-all ease duration-100 active:text-yellow-400  mr-3 lg:mr-0"
          >
            edit profile
          </Link>
        </div>
        {/* for the blog post input */}
        <section className="h-fit justify-center flex flex-col sm:flex-row bg-[#141414] py-2 ">
          {/* for the blog post creation */}
          <div className=" px-2 py-2 border-b-1 border-[#1e1e1e] sm:w-[25rem] md:w-[16rem]">
            <LuNotebookText className="xs:text-3xl sm:text-3xl md:text-4xl  text-slate-300 mb-2" />
            <Link
              to={"/createPost"}
              className="text-sm  md:text-md text-slate-300 transition-all ease duration-200 active:text-yellow-400 p-2"
            >
              create a new blog post
            </Link>
            <aside className="flex p-2 mt-3 sm:mt-5 text-xs md:text-sm justify-between text-slate-300 font-semibold w-[fit] sm:w-[10rem] md:w-[14rem] gap-2">
              <AppButton BtnText={"blog"} />
              <AppButton BtnText={"news"} />
              <AppButton BtnText={"podcasts"} />
            </aside>
          </div>
          {/* for the profile blog posts */}
          <div
            className="sm:w-[50rem] p-1.5 border-l-1 border-[#1e1e1e] bg-[#141414]"
            data-aos={visible ? "fade-left" : "fade-right"}
            data-aos-delay="1000"
            data-aos-easing="ease-in-out"
            ref={observerRef}
          >
            {isArray ? (
              <>
                {BlogArr.map((item) => (
                  <section
                    className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-between items-center sm:gap-2 xs:flex-col sm:flex-row capitalize"
                    key={item.id}
                  >
                    <aside>
                      <p className="text-gray-400 font-light xs:text-ss sm:text-xs md:text-sm py-1.5 ">
                        {item.createdAt}
                      </p>
                      <h2 className="py-2 sm:text-md lg:text-lg">
                        {item.title}
                      </h2>
                      <p className="xs:text-ss md:text-xs text-gray-400 font-light py-3">
                        {`${
                          item.sub_title.length > 100
                            ? item.sub_title.slice(0, 100)
                            : item.sub_title
                        } ${item.sub_title.length > 100 ? "..." : ""}`}
                      </p>
                      {/* => the likes,comment and share btns */}
                      <div className="flex items-center gap-3 py-3">
                        <LikeBtn likeCount={item.likes} Like={true} />
                        <CommentBtn commentCount={item.comment} />
                        <ShareBtn shareCount={item.shares} />
                      </div>
                    </aside>
                    <AppButton
                      width={true}
                      BtnFunction={() => navigate(`/blogpost/${item.id}`)}
                      BtnText="view blog"
                      iconArrow={true}
                    />
                  </section>
                ))}
              </>
            ) : (
              <>
                {/* for no blog post */}
                <section className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-center items-center capitalize bg-[#141414]">
                  <h2 className="py-2 text-sm sm:text-md lg:text-lg">
                    no blog post{" "}
                  </h2>
                </section>
              </>
            )}
          </div>
        </section>

        {/* for the footer */}
        <FooterPart />
        <Footer />
      </section>
    </>
  );
};

export default ProfilePage;
