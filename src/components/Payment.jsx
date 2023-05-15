import React from 'react'
import PayementDesc from './PayementDesc'
import PaymentCard from './PaymentCard'

const Payment = () => {
  return (
    <div className=' flex md:flex-row flex-col'>
      <PayementDesc />
      <PaymentCard />
    </div>
  )
}

export default Payment