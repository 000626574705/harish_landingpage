import React from 'react'

const JoinWorkshop = () => {
  return (
    <div className='pt-40 w-screen bg-dark_blue_image py-10 px-4 flex flex-col justify-center items-center gap-5'>
      <span className='lg:text-4xl text-3xl font-extrabold text-pure_lime text-center'>
        Do join me LIVE Inside the workshop!
      </span>

      <a
        href="https://workshops.himanshuagrawal.com/step/checkout-woo/"
        className="text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center"
      >
        <span className="text-lg lg:text-2xl font-bold">
          {">> Yes I want consistent profits"}
        </span>
        <span className="text-base lg:text-xl">(ONLY ₹299)</span>
      </a>

      <p className="font-semibold text-white text-sm md:text-lg lg:text-xl text-center">
        Register before <span style={{color:'#E69B2F'}}>23rd November 2023 7 PM</span> to unlock bonuses
        worth <span style={{color:'#E69B2F'}}>₹ 12,000</span>
      </p>
    </div>
  )
}

export default JoinWorkshop
