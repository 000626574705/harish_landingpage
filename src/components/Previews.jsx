import React from "react";
import review1 from "../assets/review1.jpeg";
import review2 from "../assets/review2.jpeg";
import review3 from "../assets/review3.jpeg";
import review4 from "../assets/review4.jpg";
import Timer from "./Timer";

const Previews = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-10 px-4 text-black bg-smoke_bg">
      <div className="uppercase font-medium text-center text-lg md:text-2xl lg:text-2xl">
        <p>DON’T JUST TAKE MY WORD FOR IT HAVE A LOOK AT WHAT PEOPLE</p>
        <h2 className="font-bold">ABOUT MY PREVIOUS WORKSHOPS</h2>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
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
      </div>

      <h1 className="mt-2 font-extrabold text-center text-2xl md:text-4xl lg:text-5xl">
        Time is running out. Reserve your seat now!
      </h1>

      <Timer/>

      <p className="font-bold text-xl">
        Fee will increase to <span className="text-red-600">Rs 2,000</span> once
        the timer hits <span className="text-red-600">ZERO</span>
      </p>

      <i
        className="fa-solid fa-arrow-down fa-beat-fade font-extrabold text-xl md:text-3xl lg:text-5xl"
        style={{ color: "#e2b42d" }}
      ></i>

      <a
        href="https://workshops.himanshuagrawal.com/step/checkout-woo/"
        className="text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center"
      >
        <span className="text-lg lg:text-2xl font-bold">
          {">> Yes I want consistent profits"}
        </span>
        <span className="text-base lg:text-xl">(ONLY ₹299)</span>
      </a>

      <p className="font-semibold text-black text-sm md:text-lg lg:text-xl text-center pb-40">
        Register before{" "}
        <span style={{ color: "#E69B2F" }}>23rd November 2023 7 PM</span> to
        unlock bonuses worth <span style={{ color: "#E69B2F" }}>₹ 12,000</span>
      </p>
    </div>
  );
};

export default Previews;
