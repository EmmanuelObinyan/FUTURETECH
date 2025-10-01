import React, { useState } from "react";
import Form from "../components/form/Form";
import formimg from '../assets/formimage.png'
import LoaderComp from '../components/ui/LoaderComp'
import { useAuth } from "../config/AuthContext";

const Login = () => {
  const {loads,user,handleChange,handleLogin,disable}=useAuth()
  
  return (
    <>
      {/* for loading */}
      { loads ? <LoaderComp/> :""}

         {/*for the login container  */}
         <section className="flex flex-col ">

          {/* first wrapper */}
           <div className=" h-fit  ">
              <img src={formimg}
               className=" mx-auto xs:w-[97%] sm:w-[95%] md:w-[96%] lg:w-[95%] mt-2 xs:h-[8rem] sm:h-[14rem] md:h-[17rem] lg:h-[21rem] "
              alt="" />
           </div>
            {/* form wrapper */}
          <div className="flex justify-center mt-3">
      <Form
        ShowText={"login"}
        blogEditor={false}
        SignupLink={true}
        passwordLinks={true}
        disable={disable}
        display={false}
        User={user}
        handleChange={handleChange}
        btnSubmit={handleLogin}
        Text="login"
      />
       </div>
     </section>
    </>
  );
};

export default Login;
