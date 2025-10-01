import React from "react";
import CountryList from "country-list-with-dial-code-and-flag";
const PersonalInfoField = ({handleRead,info}) => {

  return (
    <div>
      {/* for the fullname */}
      <label
        className="block capitalize my-2 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        fullname
      </label>
      
      <input
        type="text"
        onChange={handleRead}
         value={info.fullname}
        placeholder="enter your fullname"
        className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
      {/* for the nationality */}
      <label
        className="block capitalize my-2 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        nationality
      </label>
      <input
        type="text"
        onChange={handleRead}
        value={info.nationality}
        placeholder="enter your nationality"
        className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
      {/* for the employee status */}
        <label className="block capitalize my-2 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        employee status
      </label>
      <input
        type="text"
        onChange={handleRead}
        value={info.nationality}
        placeholder="your status"
        className="pl-3 pr-3 py-2 mt-2 h-10 xs:w-[100%] sm:w-[95%] md:w-[90%] lg:w-[85%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
      {/* for the country code and phone number */}
   
         <label
        className="block capitalize mb-2 mt-3 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        country code
      </label>
         <div className="flex items-center mb-3">
        <select name=""
         id=""
         value={info.phoneCode}
         className="xs:text-ss sm:text-xs lg:text-sm capitalize h-10">
            {
            CountryList.getAll().map((item,index)=>(
            <option key={index} value={`${item.dial_code}`}>{item.flag} {item.dial_code}</option>
                 ))}
        </select>

        <input
        type="text"
        onChange={handleRead}
        value={info.number}
        placeholder="your phone number"
        className="pl-3 pr-3 py-2  h-10 xs:w-[90%] sm:w-[81%] md:w-[79%] lg:w-[75%] border-1 border-gray-500  placeholder:capitalize  xs:text-xs lg:text-sm font-light"
      />
      </div>
      {/* for the personal bio */}
       <label
        className="block capitalize mb-2 mt-3 xs:text-sm  lg:text-md"
        htmlFor=""
      >
        your personal bio
      </label>
      <textarea name=""
       id=""
       onChange={handleRead}
       value={info.message}
       className=" pl-2 border-1 border-gray-500 xs:w-[95%] sm:w-[95%] md:w-[85%] lg:w-[80%]  h-30 placeholder:capitalize  xs:text-xs lg:text-sm font-light"
        placeholder="write about yourself">
      </textarea>
    </div>
  );
};

export default PersonalInfoField;
