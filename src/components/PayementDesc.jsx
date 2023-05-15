import React from 'react'

const PayementDesc = () => {
  return (
    <div className='payment '>
      <div className="payment-left w-[620px] ml-[110px] mt-[63px] ">
        <div className=' font-semibold text-[40px] text-white'>
          <h3 className=' leading-[60px] tracking-[1%] font-railway'>Access curated courses worth</h3>
          <h2 className=' leading-[60px] pb-[30px]'><span>&#8377; <span className='through '>18500</span> at just <span className='text-[#0096FF] font-semibold'> &#8377; 99 </span> per year</span></h2>
        </div>
        <div className=' font-semibold space-y-[30px] font-roboto'>
          <div className=" flex items-center font-roboto"><img className=' w-[45px] h-[45px]' src="/services/c.svg" alt="servicePics" /> <span className=' text-[20px]'><span className=' text-[#0096FF]  leading-[25px] font-semibold tracking-[3%] pl-[40px]'>100+ </span><span className=' font-normal leading-[25px] text-white'>Job relevant courses </span></span></div>
          <div className=" flex items-center font-roboto"><img className=' w-[45px] h-[45px]' src="/services/hours.svg" alt="servicePics" /> <span className=' text-[20px]'><span className=' text-[#0096FF]  leading-[25px] font-semibold tracking-[3%] pl-[40px]'>20,000+ </span><span className=' font-normal leading-[25px] text-white'>Hours of content</span></span></div>
          <div className=" flex items-center font-roboto"><img className=' w-[45px] h-[45px]' src="/services/webinar.svg" alt="servicePics" /> <span className=' text-[20px]'><span className=' text-[#0096FF]  leading-[25px] font-semibold tracking-[3%] pl-[40px]'>Exclusive </span><span className=' font-normal leading-[25px] text-white'> webinar access</span></span></div>
          <div className=" flex items-center font-roboto"><img className=' w-[45px] h-[45px]' src="/services/scholarship.svg" alt="servicePics" /> <span className=' text-[20px]'><span className=' text-white leading-[18px] tracking-25%] font-normal pl-[40px]'>Scholarship worth </span><span className='text-[#0096FF] font-semibold leading-[25px] text-[#0096FF]'> &#8377; 94,500</span></span></div>
          <div className=" flex items-center font-roboto"><img className=' w-[45px] h-[45px]' src="/services/experience.svg" alt="servicePics" /> <span className=' text-[20px]'><span className=' text-[#0096FF]  leading-[25px] font-semibold tracking-[3%] pl-[40px]'>Add Free </span ><span className=' font-normal leading-[25px] text-white'> learning experience</span></span></div>
        </div>
      </div>
      <div className="payment-right"></div>
    </div>
  )
}

export default PayementDesc