import React from 'react'
import banner from "../assets/banner.png"
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='relative h-screen w-full'>
        <img
          src={banner}
          alt="expense-app"
          className='w-full h-full object-cover' />
      </div>
    </>
  )
}

export default HomePage