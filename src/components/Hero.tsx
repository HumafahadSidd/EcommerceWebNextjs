import React from 'react'
import SideBar from './side'

const Hero = () => {
  return (
    <div className="w-{100%} h-screen bg-gradient-to-r from-gray-500 to-black">
<h1 className='text-center font-extrabold text-white py-44 text-3xl'>
  Lets shop online at the comfort of your own Home
</h1>
<SideBar />
</div>
  )
}

export default Hero