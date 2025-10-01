import React from 'react'
import Loading from './Loading'

const LoaderComp = () => {
  return (
    <div className='flex justify-center items-center h-full fixed bg-[white] inset-0 z-90'  >
        <Loading/>
    </div>
  )
}

export default LoaderComp