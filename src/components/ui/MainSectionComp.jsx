import React from "react";
import AppButton from "./AppButton";

const MainSectionComp = ({
  btnText,
  showBtn = false,
  width = false,
  top_text,
  body_text,
  handleNavigate,
}) => {
  return (
    <div className="text-white capitalize flex justify-around  xs:items-start sm:items-center font-inter xs:h-[7.5rem] sm:h-[8rem] md:h-[9rem] lg:h-[10rem] w-[95%]  xs:flex-col sm:flex-row xs:pl-2 sm:pl-0 xs:mb-8 sm:mb-0">
      <figure>
        <button className="bg-[#333333] p-1 mb-2 xs:text-xs sm:text-sm lg:text-md ">
          {top_text}
        </button>
        <p className="xs:text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold mb-2">
          {body_text}
        </p>
      </figure>
      <figure>
        {showBtn ? (
          <AppButton BtnText={btnText} iconArrow={true} width={width}BtnFunction={handleNavigate}  />
        ) : (
          ""
        )}
      </figure>
    </div>
  );
};

export default MainSectionComp;
