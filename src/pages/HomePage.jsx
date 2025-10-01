import React from 'react'
import NavBar from '../components/layouts/NavBar'
import LoaderComp from '../components/ui/LoaderComp'
import { useAuth } from '../config/AuthContext'
import Headers from '../components/layouts/Headers'
const HomePage = () => {
  const{loading}=useAuth()
  return (
    <>
      {loading ? <LoaderComp/>:""}
        <NavBar/>
     <section className='xs:mt-42 lg:mt-37'>
        <Headers/>
      </section>    
    </>
  )
}

export default HomePage