import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs';
import { BsEye } from 'react-icons/bs';

const AppButton = ({width=false,iconArrow=false,iconEye=false,showColor=false,BtnFunction,BtnText}) => {
  return (
    <div className={`${width ? "xs:w-[15rem]":"xs:w-[7.5rem]"} sm:w-[8rem] md:w-[7.5rem] lg:w-[8rem] flex justify-center items-center text-center p-3  border-0 rounded-md font-semibold  ${showColor ? "bg-[#FFD11A] text-black" : "border-1 border-gray-800"}`} onClick={BtnFunction}>
       <p className='xs:text-ss md:text-xs lg:text-sm'>{BtnText}</p> 
        
        {
          iconArrow ?
          <BsArrowUpRight
         className={`ml-2  text-yellow-400 text-[1.3rem] `}
        /> : ""
        }

        {
          iconEye ?
          <BsArrowUpRight
         className={`ml-2  text-yellow-400 text-[1.3rem] `}
        /> : ""
        }
       
      </div>
  )
}

export default AppButton