import React from 'react'
import feature from '../assets/feature.webp'
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpg";

const Feature = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen py-8 px-4 gap-5'>
      <h1 className='font-extrabold lg:text-5xl text-3xl'>Featued At</h1>
      <img src={feature} alt="" className='w-4/5 md:w-1/2 lg:w-1/2'/>

      <a
        href="https://workshops.himanshuagrawal.com/step/checkout-woo/"
        className="text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center"
      >
        <span className="text-lg lg:text-2xl font-bold">
          {">> Yes I want consistent profits"}
        </span>
        <span className="text-base lg:text-xl">(ONLY ₹299)</span>
      </a>

      <p className="font-semibold text-black text-sm md:text-lg lg:text-xl text-center">
        Register before <span style={{color:'#E69B2F'}}>23rd November 2023 7 PM</span> to unlock bonuses
        worth <span style={{color:'#E69B2F'}}>₹ 12,000</span>
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <img
          src={review1}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
        <img
          src={review2}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
        <img
          src={review3}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
        <img
          src={review4}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
        <img
          src={review1}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
        <img
          src={review2}
          alt="review2"
          className="w-96 h-64 border-text_yellow border-2"
        />
      </div>

    </div>
  )
}

export default Feature
