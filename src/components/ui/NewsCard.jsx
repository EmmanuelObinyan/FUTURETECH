import React from "react";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import AppButton from "./AppButton";
const NewsCard = ({ news_image,news_title, category, likeCount, shareCount }) => {
  return (
    <div className="text-white capitalize font-inter bg-[#141414] h-fit sm:w-[14rem] md:w-[18rem] lg:w-[27rem] p-2 ">
      <img
        src={news_image}
        className="xs:h-[7.5rem] sm:h-[8rem] md:h-[10rem] lg:h-[12rem] w-full rounded-lg"
        alt=""
      />
      <section>
        <p className="xs:text-sm lg:text-md py-2 font-semibold">
          {news_title}
        </p>
        <p className="text-gray-500 xs:text-ss sm:text-xs lg:text-sm md:py-2">
          {category}
        </p>
      </section>
      <figure className="md:w-[fit] lg:w-[26rem] flex xs:flex-row sm:flex-col lg:flex-row  justify-between xs:items-center sm:items-start lg:items-center xs:px-2.5 sm:px-0">
        <aside className="xs:w-[8rem] sm:w-[10.5rem]  lg:w-[8.5rem] justify-between flex sm:py-2 md:py-3 lg:py-0">
          <LikeBtn Like={false} likeCount={likeCount} />
          <ShareBtn shareCount={shareCount} />
        </aside>
        <AppButton wide={true} BtnText="read more" iconArrow={true} />
      </figure>
    </div>
  );
};

export default NewsCard;
