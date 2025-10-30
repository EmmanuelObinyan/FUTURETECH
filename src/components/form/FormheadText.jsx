import React from 'react'

const FormheadText = ({textShow}) => {
  return (
      <>
    { 
       textShow === "signup" &&
    (<p className='capitalize font-semibold font-inter xs:text-md sm:text-lg md:text-xl lg:text-2xl mx-auto w-fit'>
        create an account
    </p>)
}
    {
      textShow === "login" &&
    (
        <p className='capitalize font-semibold font-inter xs:text-md sm:text-lg md:text-xl lg:text-2xl mx-auto w-fit'>
        login to your account
    </p>
    )
   }
       {
      textShow === "forgotten" &&
    (
        <p className='capitalize font-semibold font-inter xs:text-md sm:text-lg md:text-xl lg:text-2xl  w-fit'>
        forgotten password
    </p>
    )
   }
   {
      textShow === "blog" &&
    (
        <p className='capitalize text-center font-semibold font-inter xs:text-md sm:text-lg md:text-xl lg:text-2xl py-2'>
        create a new blog post
    </p>
    )
   }
    </>
  )
}

export default FormheadText