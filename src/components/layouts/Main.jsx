import React from "react";
// import { useState,useEffect } from "react";
// import { db } from "../../config/Firebase";
// import { useAuth } from "../../config/AuthContext";
// import {
//   onSnapshot,
//   collection,
//   where,
//   query,
//   orderBy,
// } from "firebase/firestore";
import MainSectionComp from "../ui/MainSectionComp";
import Main_Firstsection from "../ui/Main_Firstsection";
import { useNavigate } from "react-router-dom";
import PreviewComp from "../ui/PreviewComp";
import TabCard from "../ui/TabCard";
import TabLayout from "../ui/TabLayout";
import { useTab } from "../../config/TabContext";
import { useObserver } from "../../config/ObserverContext";
import TestimonialComp from "../ui/TestimonialComp";
import FooterPart from "../ui/FooterPart";
const Main = () => {
  const navigate = useNavigate();
  const { visible, observerRef } = useObserver();
  const { BlogArr,posts} = useTab();
  const   Blog=[]
  const ButtonTabs = [
    "all",
    "quantom computing",
    "AI ethics",
    "space exploration",
    "biotechnology",
    "renewable energy",
  ];
  return (
    <div>
      <MainSectionComp
        top_text="unlock the power of"
        body_text="futuretech features"
      />
      <Main_Firstsection
        photoicon={true}
        title="future technology blog"
        text="Stay informed with our blog section dedicated to future technology."
      />
      <Main_Firstsection
        photoicon={false}
        title="research insights blogs"
        text=" Dive deep into future technology concepts with our research section.."
        first_card={false}
      />
      <MainSectionComp
        top_text="a knowledge treasure trove"
        body_text="explore futuretech's in-Depth Blog Posts"
        showBtn={true}
        handleNavigate={() => navigate("/blog")}
        btnText={"view all blogs"}
        width={true}
      />
      {/* for the tabs selection */}
      <section className="p-2 h-fit font-inter  text-white bg-[#141414] w-[100%] " ref={observerRef}
      data-aos={visible ? "fade-down" : "fade-up"}
       data-aos-easing="ease-in-out"
      data-aos-duration="2000">
        <TabCard TabsItems={ButtonTabs}
        />
        <TabLayout blog={posts} />
      </section>
      <MainSectionComp
        top_text="your gateaway to in-Depth information"
        body_text="unlock valuable knowledge with futureTechs resources"
        showBtn={true}
        handleNavigate={() => navigate("/resources")}
        btnText={"view all resourcess"}
        width={true}
      />
      {/* for the preview */}
      <PreviewComp />
      <PreviewComp itemShow={false} />
      <MainSectionComp
        top_text="what our readers say"
        body_text="real words from real readers"
        showBtn={true}
        handleNavigate={() => navigate("*")}
        btnText={"view all testimonials"}
        width={true}
      />
{/* testimonial */}
    <TestimonialComp/>
     <FooterPart/>
     
    </div>
  );
};

export default Main;
