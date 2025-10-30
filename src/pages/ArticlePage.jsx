import React from "react";
import NavBar from "../components/layouts/NavBar";
import Form from "../components/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useProfile } from "../config/ProfileContext";
import LoaderComp from "../components/ui/LoaderComp";
import Footer from "../components/layouts/Footer";
import FooterPart from "../components/ui/FooterPart";
const ArticlePage = () => {
  const navigate = useNavigate();
  const { content, handleBlur, handleChange, blog, BlogSubmit, loading } =
    useProfile();
  if (loading ? <LoaderComp /> : "")
    return (
      <>
        <aside className="h-fit flex items-center m-2">
          <FaArrowCircleLeft
            className="xs:text-lg sm:text-2xl lg:text-3xl m-2 text-white duration-200 transition-all ease active:text-yellow-600"
            onClick={() => navigate("/profile")}
          />
          <Link
            to={"/profile"}
            className="text-white font-inter p-2 text-xs sm:text-sm md:text-md "
          >
            back to profile
          </Link>
        </aside>
        <section className="mt-0 text-white capitalize font-inter">
          {/* for the blog writing */}
          <div className="flex w-full justify-center bg-[#141414] ">
            <Form
              InputField={false}
              handleBlur={handleBlur}
              handleChange={handleChange}
              blog={blog}
              border_show={false}
              btnSubmit={BlogSubmit}
              content={content}
              ShowText={"blog"}
              display={true}
              showBlue={false}
              Text={"publish blog"}
            />
          </div>
          <FooterPart/>
           <Footer/>
        </section>
      </>
    );
};

export default ArticlePage;
