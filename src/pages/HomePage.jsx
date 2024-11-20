import React from 'react'
import banner from "../assets/banner.png"

const HomePage = () => {
  return (
    <>
        <div className='relative h-screen w-full'>
            <img 
            src={banner} 
            alt="expense-app" 
            className='w-full h-full object-cover'/>
        </div>
    </>
  )
}

export default HomePage