import React from "react";
import AppButton from "../ui/AppButton";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import Marquee from 'react-fast-marquee'
import logoimg from "../../assets/desktoplogo.png";
const NavBar = () => {
  return (
    <nav className="flex z-40 text-white flex-col w-full font-inter capitalize fixed top-0">
      <div className="py-4 mt-1 bg-[#141414]">
        <Marquee pauseOnClick pauseOnHover className="opacity-70">
        <p className="mx-auto items-center flex w-fit">
          subscribe to our newsletter for new & latest blogs and resources
          <span>
            <BsArrowUpRight className="ml-2 font-bold  text-yellow-400 h-[2rem] sm:w-[16%] md:w-[45%] " />
          </span>
        </p>
       </Marquee> 
      </div>
      <div className="flex justify-around py-4 items-center bg-[#1E1E1E]">
        {/* the logo image */}
        <img src={logoimg} className="h-[2.5rem]" alt="" />
        {/* for the navigation bar */}
        <ul className="flex justify-around  w-[37rem] py-1  text-sm">
          {/*home  */}
          <Link to={"/"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              home
            </li>
          </Link>
          {/* news */}
          <Link to={"/news"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              news
            </li>
          </Link>
          {/* podcasts */}
          <Link to={"/podcasts"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              podcasts
            </li>
          </Link>
          {/* resources */}
          <Link to={"/resources"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              resources
            </li>
          </Link>
          {/* profile */}
          <Link to={"/profile"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              profile
            </li>
          </Link>
          {/* settings */}
          <Link to={"/settings"}>
            <li className="p-2 rounded-md duration-200 transition-all ease active:bg-[#141414]">
              settings
            </li>
          </Link>
        </ul>
        {/* for the contact button */}
        <AppButton BtnText="contact us" showColor={true} />
      </div>
    </nav>
  );
};

export default NavBar;
