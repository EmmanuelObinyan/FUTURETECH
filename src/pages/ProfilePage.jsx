import React from "react";
import NavBar from "../components/layouts/NavBar";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import LikeBtn from "../components/ui/LikeBtn";
import ShareBtn from "../components/ui/ShareBtn";
import CommentBtn from "../components/ui/CommentBtn";
import AppButton from "../components/ui/AppButton";
import { useObserver } from "../config/ObserverContext";
import { FaCamera } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import FooterPart from "../components/ui/FooterPart";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/layouts/Footer";
import { db } from "../config/Firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useProfile } from "../config/ProfileContext";
import LoaderComp from "../components/ui/LoaderComp";
import Modal from "../components/ui/Modal";
const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  // to open the notification model
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  // ref for the profile picture
  const ProfileRef = useRef(null);
  const clickRef = useRef(null);
  const { visible, observerRef } = useObserver();
  const isArray = false;
  // usecontext file
  const { handleImageChange, loads, User, blogpost, author } = useProfile();
  // to delete a blog post
  const deletePost = async (id) => {
    try {
      if (!author) {
        setLoading(false);
        setOpen(false);
        return;
      }
      const deletedocs = doc(db, "blogs", id);
      await deleteDoc(deletedocs);
      toast.success("blogpost deleted", {
        style: {
          textTransform: "capitalize",
          backgroundColor: "#1e1e1e",
          color: "green",
        },
      });
      setLoading(false);
      setOpen(false);
    } catch (error) {
      setLoading(false);
      setOpen(false);
      console.log(error);
    }
  };
  //  for styling
  const styles = `transition-all ease-in-out duration-200 ${
    open ? "animate-movement" : "animate-reverse"
  }`;

  return (
    <>
      {loads ? <LoaderComp /> : ""}
      <NavBar />
      <section
        className={` xs:mt-28 sm:mt-32 lg:mt-37 text-white capitalize font-inter relative `}
      >
        {/* for the notifaction modal to delete post */}
        <figure
          className={`w-full h-[100vh] fixed z-45 inset-0 bg-black/90 flex justify-center items-center backdrop-blur-sm  duration-200 transition-all ease-in-out ${
            open ? "" : "hidden"
          }`}
        >
          <Modal
            cancelFunction={() => setOpen(false)}
            classname={styles}
            handleClick={() => clickRef.current?.click()}
            modalText={"you want to delete this post"}
            exitFunction={() => setOpen(false)}
          />
        </figure>

        <div
          className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-3 border-b-1 border-[#1e1e1e] bg-[#141414] py-2 "
          ref={observerRef}
          data-aos={visible ? "fade-left" : "fade-right"}
          data-aos-easing="ease-in-out"
        >
          {/* profile image */}
          <aside className="xs:h-[8rem] sm:h-[9rem] md:h-[10rem] lg:h-[15rem] xs:w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[15rem] rounded-full relative border-1 ">
            <img
              src={User?.profilePic || "/avatarpic.webp"}
              alt=""
              className="h-full rounded-full w-full object-center"
            />
            <FaCamera
              className="xs:text-xl sm:text-2xl lg:text-3xl text-slate-400 absolute bottom-[2%] right-[12%] z-10 transition-all ease duration-800  active:text-yellow-400"
              onClick={() => ProfileRef.current.click()}
            />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
              ref={ProfileRef}
            />
          </aside>

          <div className="w-fit ">
            {/* profile name */}
            <p className="font-semibold xs:text-md sm:text-lg md:text-xl lg:text-3xl p-2 text-center md:text-left">
              {User ? User.fullname : "add profile name"}
            </p>
            {/* personal bio */}
            <p className="xs:w-[90%] sm:w-[60%] md:w-[80%] lg:w-[75%] text-slate-300 xs:text-ss sm:text-sm italic font-medium p-2 mx-auto md:mx-0 text-center md:text-left">
              {User ? User.biography : "add bio"}
            </p>
            {/* profile status */}
            <p className="font-medium text-slate-300  text-center md:text-left text-xs sm:text-sm md:text-md p-2">
              {User ? User.status : "add employee status"}
            </p>
            {/* for the profile email,country and phone number */}
            <aside className="flex p-2 mt-3 sm:mt-5 text-xs sm:text-sm  sm:items-center justify-self-center justify-between text-slate-200 font-semibold gap-3 w-fit lg:w-[30rem] flex-col sm:flex-row">
              <p>{User ? User.email : "add email"}</p>
              <p>{User ? `${User.phone_number}` : " add phone"}</p>
              <p>{User ? User.nationality : "add nationality"}</p>
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
            <LuNotebookText
              className="xs:text-3xl sm:text-3xl md:text-4xl  text-slate-300 mb-2"
              onClick={() => navigate("/createPost")}
            />
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
            {blogpost.length > 0 ? (
              <>
                {blogpost.map((item) => (
                  <section
                    className="flex ml-3 xs:h-[14rem] sm:h-[14rem]  justify-between items-center sm:gap-2 xs:flex-col sm:flex-row capitalize"
                    key={item.id}
                  >
                    <aside>
                      <p className="text-gray-400 font-light xs:text-ss sm:text-xs md:text-sm py-1.5 ">
                        {item.createdAt}
                      </p>
                      <h2 className="flex justify-between items-center gap-6 py-2 sm:text-md lg:text-lg">
                        {item.title}
                        {/* to open the delete modal */}
                        <aside
                          className=" h-[2.5rem] w-[2.5rem] flex justify-center items-center rounded-full duration-200 transition-all ease active:bg-[#1e1e1e]"
                          onClick={() => setOpen(true)}
                        >
                          <BsThreeDotsVertical className="transition-all duration-200 ease text-lg active:text-slate-500 " />
                          {/* hidden button */}
                          <button
                            className="hidden"
                            ref={clickRef}
                            onClick={() => deletePost(item.id)}
                          >
                            a click function
                          </button>
                        </aside>
                      </h2>
                      <p
                        className="xs:text-ss md:text-xs text-gray-400 font-light py-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.content.length > 100
                              ? item.content.slice(0, 100) + "..."
                              : item.content,
                        }}
                      ></p>
                      {/* => the likes,comment and share btns */}
                      <div className="flex items-center gap-3 py-3">
                        <LikeBtn likeCount={item.likes} Like={item.likes} />
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
