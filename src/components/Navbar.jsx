import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-white h-[68px] flex items-center font-railway'>
      <div className=" flex mr-auto">
        <div className=" pl-[106px] pr-16">
          <img src="/logo.svg" alt="" />
        </div>
        <div className=" flex items-baseline pr-[70px]">Courses <span className=' pl-[18px]'><img src="/dropDown.png" alt="" /></span></div>
        <div className=" flex items-baseline">Programs <span className=' pl-[18px]'><img src="/dropDown.png" alt="" /></span></div>
      </div>
      <div className=" flex pr-[106px] items-center">
        <div className="">
          <img src="/searchBar.png" alt="searchBar" />
        </div>
        <div className=" pl-[67px] font-medium text-base leadin-[18px]">Log in</div>
        <div className=" ml-16">
          <button className=' py-[10px] px-[42px] font-bold leading-[18px] bg-gradient-to-r from-[#0096FF] to-[#0048FF] rounded-[52px] text-white'>JOIN NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar