import React from 'react'
import NavBar from '../components/layouts/NavBar'
import { useEffect,useState } from 'react'
const ProfilePage = () => {
  return (
    <>
      <NavBar/>
      <section className="xs:mt-26 sm:mt-32 lg:mt-37">
            <div className='text-white capitalize font-inter'>
                 profile BlogPage
                 {/* for the profile picture */}
                 {/*for the profile name  */}
                 {/* for the profile status */}
                 {/* for the profile country */}
                 {/* for the profile email */}
                 {/* for the profile phone number */}
                 {/* for the profile bio */}
            </div>
      </section>
      </>
  )
}

export default ProfilePage