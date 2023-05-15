import React, { useState } from 'react'

const PaymentCard = () => {
  const plans = {
    "12 Month Subscription": 179,
    "9 Month Subscription": 149,
    "3 Month Subscription": 99,
  }

  const [selectedPlan, setSelectedPlan] = useState(179);

  const handleSelectPlan = (event) => {
    setSelectedPlan(parseInt(event.target.value));
  };



  return (
    <div className=' w-[450px] bg-white rounded-[8px] mt-[60px] ml-auto mr-[120px]'>
      <div className=" flex px-[100px] pt-[20px]">
        <div className=" mr-auto">
          <img src="/cardIcons/1.svg" alt="" />
        </div>
        <div className="c">
          <img src="/cardIcons/2.svg" alt="" />
        </div>
      </div>
      <div className=" px-6 font-roboto font-semibold text-[20px] leading-[23px] mt-[16px] flex justify-center text-[#3C4852]">
        <p className=' text-center items-center'>Select your subcription plan</p>
      </div>
      <div className=" relative h-[50px] mt-[15px] mx-[24px] bg-[#E7E7E7] rounded-[4px] border-2 border-[#BEBEBE] text-[#BEBEBE] flex items-center px-[10px]">
        <div className=' absolute rounded-b-[4px] px-[10px] top-0 left-10 w-[100px] mb-4 text-center text-white bg-[#F77171] '>
          <p className=" text-[9px] ">Offer expired</p>
        </div>
        <div className=" flex mr-auto">
          <input className=' mr-[10px] border p-[4px] w-[18px]' checked disabled type="radio" name="subscription" value="12" onChange={handleSelectPlan} />
          <p className=' font-roboto z-[10] font-semibold text-[14px] '>12 Months Subscription </p>
        </div>
        <div className=" font-roboto font-semibold flex flex-col items-center">
          <div className="container flex flex-col text-[0px]">
            <div className=" inline-block">
              <p className="inline text-[10px] text-[#3C4852]">Total</p>
              <p className="inline text-[12px] text-[#3C4852]">&#8377; 99</p>
            </div>
            <div className=" inline-block ml-auto">
              <span className="text-[9px] text-[#3C4852]">&#8377; 8</span>
              <span className="text-[9px] text-[#BEBEBE]"> /mo</span>
            </div>
          </div>
        </div>
      </div>

      {plans && Object.entries(plans).map(([key, value]) => (
        <div key={key} className={`relative h-[50px] mt-[15px] mx-[24px] rounded-[4px] flex items-center px-[10px] ${key.includes("12") ? " bg-[#D7EDDD] border-2 border-[#47BA68]  " : " border-2 border-[#BEBEBE] "}`}>
          {key.includes("12") && <div className=' absolute rounded-b-[4px] px-[10px] top-0 left-10 w-[100px] mb-4 text-center text-white bg-[#47BA68]'>
            <p className=" text-[9px] ">Recommended</p>
          </div>}
          <div className=" flex mr-auto items-center">
            <input className=' mr-[10px] hidden' id={value} type="radio" name="subscription" value={value} onChange={handleSelectPlan} />
            <label htmlFor={value} className={`rounded-full w-[18px] h-[18px]  mr-[10px] ${selectedPlan !== value && 'border-2 border-[#BEBEBE]'}`}>
              {selectedPlan === value && <img src="/cardIcons/checked.svg" alt="checked" className="w-full h-full" />}
            </label>
            <p className=' font-roboto font-semibold text-[14px] '>{key}</p>
          </div>
          <div className=" font-roboto font-semibold flex flex-col items-center">
            <div className="container flex flex-col text-[0px]">
              <div className=" inline-block">
                <p className="inline text-[10px] text-[#3C4852]">Total</p>
                <p className="inline text-[12px] text-[#3C4852]">&#8377; {value}</p>
              </div>
              <div className=" inline-block ml-auto">
                <span className="text-[9px] text-[#3C4852]">&#8377; 25</span>
                <span className="text-[9px] text-[#BEBEBE]"> /mo</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <hr className='mx-[24px] mt-[20px] border border-[#BEBEBE] font-bold' />
      <div className=" font-roboto mx-[44px] pt-[10px] pb-[10px] flex text-[15px]">
        <span className=" font-normal mr-auto text-[#BEBEBE]">Subscription Fee</span>
        <span className=" font-medium ">&#8377; <span className="">18,500</span></span>
      </div>
      <div className=" relative h-[70px] mx-[24px] rounded-[4px] border-2 border-[#BEBEBE] px-[10px]">
        <div className='1 flex pt-[6px] pb-[6px]'>
          <div className=" flex mr-auto">
            <p className=' font-roboto text-[#DE4313] font-semibold text-[14px] '>Limited time offer </p>
          </div>
          <div className=" font-roboto font-semibold">
            <div className=" text-[#3C4852] text-[15px]">
              <span className="c"> -&#8377; <span className="">18,401</span></span>
            </div>
          </div>
        </div>
        <div className="2 flex">
          <img src="/cardIcons/alerticon.svg" alt="" />
          <span className=' text-[14px] text-[#DE4313] font-roboto pl-2'>Offer valid till 25th March 2023 </span>
        </div>
      </div>
      {/* <div className=" h-[120px] mt-[10px] mx-[24px] bg-green-400"> this i s</div> */}
      <div className=" mx-[44px] text-[#3C4852] font-roboto pb-[20px] pt-[10px] flex text-[15px] items-center">
        <span className=" font-medium mr-auto ">Total <span className=' font-normal text-[14px]'>(Incl. of 18% GST)</span></span>
        <span className=" font-bold text-[20px]">&#8377; <span className="">{Math.round(selectedPlan + ((selectedPlan * 18) / 100))}</span></span>
      </div>
      <div className=" h-[45px]  mx-[24px] font-roboto font-bold text-base flex">
        <button className=" text-[#F77171] px-[63px] py-[6px] mr-5 border-2 border-[#F77171]"> CANCEL</button>
        <button className=" text-white px-[29px] py-[6px] bg-[#47BA68]">PROCEED TO PAY</button>
      </div>
      <div className=" pb-2 mt-[10px] mx-[24px]">
        <img src="/cardIcons/razorpay.svg" alt="" />
      </div>
    </div>
  )
}

export default PaymentCard