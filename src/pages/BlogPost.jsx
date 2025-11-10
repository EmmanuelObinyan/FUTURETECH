import React, { lazy, useEffect, useState } from "react";
import NavBar from "../components/layouts/NavBar";
import pic1 from "../assets/newcol1.png";
import { useMediaQuery } from "react-responsive";
import pic2 from "../assets/newscol2.png";
import pic3 from "../assets/newscol3.png";
// for the category images
import AI from "../assets/aiintelligence.jpg";
import environment from "../assets/environment.jpg";
import biotech from "../assets/biotech.jpg";
import health from "../assets/health.jpg";
import politics from "../assets/poliitics.jpg";
import space from "../assets/space.jpg";
import sports from "../assets/spacebooks.png";
import tech from "../assets/technology.jpg";
import quantum from "../assets/quantumpapers.png";
import energy from "../assets/energy.jpg";
// the end of the images
import NewsCard from "../components/ui/NewsCard";
import { useObserver } from "../config/ObserverContext";
import Aos from "aos";
import { db } from "../config/Firebase";
import { useAuth } from "../config/AuthContext";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "aos/dist/aos.css";
import FooterPart from "../components/ui/FooterPart";
import Footer from "../components/layouts/Footer";
import LikeBtn from "../components/ui/LikeBtn";
import CommentBtn from "../components/ui/CommentBtn";
import ShareBtn from "../components/ui/ShareBtn";
import AppButton from "../components/ui/AppButton";
import LoaderComp from "../components/ui/LoaderComp";
const BlogPost = () => {
  // to open a sliced text
  const [readmore, setReadmore] = useState(false);

  useEffect(() => {
    Aos.init();
  });
  const { author } = useAuth();
  const { observerRef, visible } = useObserver();
  const isMobile = useMediaQuery({ query: "(max-width:600px)" });
  // unique id for each blog post
  const { id } = useParams();
  // a loading state
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [authorName, setAuthorName] = useState(null);
  // to fetch the blog post
  useEffect(() => {
    // wait until author is available
    if (!author) {
      console.log("No author yet, skipping fetch");
      return;
    }
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const document = doc(db,"blogs", id);
        const snapshot = await getDoc(document);

        if (snapshot.exists()) {
          const blogData = snapshot.data();
          setBlog(blogData);
          if (blogData.authorId) {
            const userRef = doc(db, "author", blogData.authorId);
            const unsubUser = onSnapshot(
              userRef,
              (usersnap) => {
                if (usersnap.exists()) {
                  const authorData = usersnap.data();
                  setAuthorName(authorData);
                }
              },
              (error) => {
                console.error("Error getting author:", error);
              }
            );
            return () => unsubUser();
          } else {
            console.log("No authorId in blog data");
          }
        } else {
          console.log("Blog document does not exist");
          setBlog(null);
        }
      } catch (error) {
        console.log(error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, author]);

  // to change the images

  return (
    <>
      {loading ? <LoaderComp /> : ""}
      <NavBar />
      <section className="xs:mt-29 sm:mt-33 lg:mt-38">
        <div className="bg-[#141414] capitalize font-inter text-white border-b-1 border-[#1e1e1e] mb-3">
          <section className="h-fit relative">
            {/* for category images */}
            <img
              src={blog?.category === "environment" && environment}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "environment" ? "" : "hidden"
              } `}
            />
            <img
              src={blog?.category === "aiintelligence" && AI}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "aiintelligence" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "biotechnology" && biotech}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "biotechnology" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "health" && health}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "health" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "politics" && politics}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "politics" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "space-exploration" && space}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "space-exploration" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "sports" && sports}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "sports" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "technology" && tech}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "technology" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "quantum-computing" && quantum}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "quantum-computing" ? "" : "hidden"
              }`}
            />
            <img
              src={blog?.category === "renewable-energy" && energy}
              loading={lazy}
              alt=""
              ref={observerRef}
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos={visible ? "fade-in" : "fade-out"}
              className={`xs:h-[11.5rem] sm:h-[18rem] md:h-[20rem] lg:h-[35rem] w-full object-cover ${
                blog?.category === "renewable-energy" ? "" : "hidden"
              }`}
            />
            {/* for the blog post introduction */}
            <p className="font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl absolute xs:bottom-0 sm:bottom-2 md:bottom-3 lg:bottom-5 flex justify-self-center xs:p-1 md:p-2 w-fit text-center ">
              {blog?.title}
            </p>
          </section>
          <section className="flex xs:flex-col sm:flex-row  h-fit w-fit p-6">
            {/* for the blogpost reading articles */}
            <figure className=" xs:w-[100%] sm:w-[50%] h-fit border-r-1 border-[#1e1e1e]">
              <div
                className="h-[fit] p-3 border-1 border-[#1e1e1e] relative  "
                ref={observerRef}
                data-aos-delay="600"
                data-aos-easing="ease-in-out"
                data-aos={visible ? "fade-down" : "fade-up"}
                data-aos-duration="2000"
              >
                <h2 className=" xs:text-sm md:text-md lg:text-lg py-1.5 sm:py-3 ">
                  {blog?.category}
                </h2>
                <p
                  className="xs:text-ss sm:text-xs lg:text-sm font-light text-gray-400 sm:w-[90%] md:leading-5 lg:leading-6 "
                  dangerouslySetInnerHTML={{
                    __html: readmore
                      ? blog?.content
                      : blog?.content.slice(0, 150) + "...",
                  }}
                ></p>

                <button className="w-fit flex justify-self-center absolute sm:-bottom-8 ">
                  <AppButton
                    BtnText={`${readmore ? "see less " : "read full blog"}`}
                    wide={true}
                    BtnFunction={() => setReadmore(!readmore)}
                  />
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
                <LikeBtn likeCount={blog?.likes} Like={blog?.likes} />
                <CommentBtn commentCount={blog?.comment} />
                <ShareBtn shareCount={""} />
              </div>
              <div className="flex flex-row xs:w-[20rem] sm:w-[70%] md:w-[50%] lg:w-[50%] justify-between mx-auto ">
                <figure className="">
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    publication date
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">
                    {blog?.createdAt}
                  </p>
                </figure>
                <figure>
                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    category
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">{blog?.category}</p>

                  <p className="xs:text-xs lg:text-sm text-gray-500 py-2">
                    author name
                  </p>
                  <p className="py-2 xs:text-sm lg:text-md">
                    <p className="py-2 xs:text-sm lg:text-md">
                      {authorName?.fullname || "Loading..."}
                    </p>
                  </p>
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
