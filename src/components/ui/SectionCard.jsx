import React from 'react'

const SectionCard = ({sub_title,sub_text}) => {
  return (
     <div>
        <aside className="bg-[#1e1e1e] p-2 xs:h-[7.5rem] sm:h-[8rem]  lg:h-[10rem] rounded-lg sm:w-[95%] md:w-[20rem] lg:w-[25rem]">
            <h2 className="xs:text-md sm:text-lg lg:text-2xl font-semibold py-2 mt-3">{sub_title}</h2>
            <p className="xs:text-ss sm:text-xs lg:text-sm text-gray-500 mt-2">
              {sub_text}
            </p>
          </aside>
    </div>
  )
}

export default SectionCard