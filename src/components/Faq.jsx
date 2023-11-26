import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='py-10 px-4 w-screen flex flex-col gap-5 items-center'>
      <h1 className='lg:text-5xl text-3xl text-center font-extrabold text-text_dark_blue'>
      Frequently Asked Questions
      </h1>

      <p className='lg:text-2xl text-lg text-text_dark_blue font-medium text-center lg:w-3/4'>
      I have answered all common questions below that you might have about the workshop. For any further queries, please contact: support@himanshuagrawal.com
      </p>

      <div className='lg:w-3/4 flex flex-col gap-1 items-center'>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>
        <FaqCard question={'When and where is the workshop and how long would it be?'} answer={'When and where is the workshop and how long would it be?'}/>

      </div>

      <a
        href="https://workshops.himanshuagrawal.com/step/checkout-woo/"
        className="text-white py-2 lg:py-3 px-6 md:px-16 lg:px-28 rounded-lg bg-btn_red flex flex-col items-center"
      >
        <span className="text-lg lg:text-2xl font-bold">
          {">> Yes I want consistent profits"}
        </span>
        <span className="text-base lg:text-xl">(ONLY ₹299)</span>
      </a>
      <p className="font-semibold text-black text-sm md:text-lg lg:text-xl text-center">
        Register before{" "}
        <span style={{ color: "#E69B2F" }}>23rd November 2023 7 PM</span> to
        unlock bonuses worth <span style={{ color: "#E69B2F" }}>₹ 12,000</span>
      </p>
    </div>
  )
}

export default Faq
