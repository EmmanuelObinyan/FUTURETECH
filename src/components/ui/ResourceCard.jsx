import React from "react";
import SectionCard from "./SectionCard";
import AppButton from "./AppButton";
const ResourceCard = ({ showBtn = true,ShowMedia=true,content_image,content_video,content_title,content_text,image_classname }) => {
  return (
    <section className="text-white bg-[#141414] p-3 h-[fit]   capitalize font-inter">
      {/* for content image and video */}
        <figure className= "xs:h-[10rem] sm:h-[12rem] md:h-[15rem] lg:h-[20rem] w-full ">
             {
                ShowMedia ?
                <img src={content_image}
                 className={`object-cover h-full ${image_classname} `}
                alt="" />
                :
                <video className="w-full h-full">
                    <source src={content_video} type="video/mp4"/>
                </video>
             }
        </figure>
      <div className="flex flex-col sm:flex-row items-center my-3">
        <aside>
          <h2 className="font-semibold  xs:text-sm sm:text-md lg:text-lg py-2 px-1">
           {content_title}
          </h2>
          <p className="text-gray-500 xs:text-ss sm:text-xs lg:text-sm sm:w-[95%] md:w-[90%] lg:w-[80%] p-2">
            {content_text}
          </p>
        </aside>
        {showBtn ? (
          <AppButton
            BtnText="download PDF now"
            wide={true}
            width={true}
            iconArrow={true}
          />
        ) : (
          ""
        )}
      </div>
      {/* <figure className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
        <SectionCard
          TextInvert={false}
          sub_title="publication date"
          sub_text="july 2023"
        />
           <SectionCard
           TextInvert={false}
          sub_title="category"
          sub_text="quantum computing"
         />
           <SectionCard
           TextInvert={false}
          sub_title="author"
          sub_text="dr.quartum"
         />
      </figure> */}
    </section>
  );
};

export default ResourceCard;
