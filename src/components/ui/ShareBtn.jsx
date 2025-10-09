import React from 'react'
import { TbLocationShare } from 'react-icons/tb';
const ShareBtn = ({shareCount}) => {
  return (
     <div className='bg-[#1e1e1e] cursor-pointer flex justify-center gap-1 items-center xs:h-[1.2rem] sm:h-[1.3rem] md:h-[1.5rem] lg:h-[1.7rem] xs:w-[3.6rem] sm:w-[4rem]  px-3 rounded-2xl'>
            <TbLocationShare
             className='xs:h-[0.7rem] sm:h-[0.8rem] md:w-[1rem] md:h-[1rem] '
            />
            <p className=' xs:text-ss md:text-xs  text-gray-400'> 
              {shareCount}
            </p>
            
        </div>
  )
}

export default ShareBtn