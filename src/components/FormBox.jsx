import React from "react";

const FormBox = () => {
  return (
    <div
      className="py-10 px-3 text-xl font-normal bg-smoke_bg w-screen flex flex-col gap-5 justify-center items-center"
      style={{ color: "#333" }}
    >
      <h1
        className="text-center font-extra_bold text-2xl md:text-3xl lg:text-4xl"
        style={{ color: "#151515" ,fontSize:'33px' }}
      >
        Please Check All Boxes Where Your Answer Is{" "}
        <span className="text-green-600">YES!</span>
      </h1>

      <div className="mt-3 flex justify-center mx-8 gap-5 text-base md:text-lg lg:text-xl font-medium flex-wrap">
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
        <div className="bg-white rounded-md p-6 flex gap-4 items-center w-full lg:w-1/3 md:w-1/3">
          <span>
            <input
              className="h-4 w-4 lg:w-6 lg:h-6"
              type="checkbox"
              name=""
              id=""
            />
          </span>
          <span>
            {
              "I want to launch my profitable funnel to get more customers & sales for my business but I don’t know where & how to start"
            }
          </span>
        </div>
      </div>

      <div className="m-2 px-4">
        <h3 className="lg:text-3xl md:text-3xl text-lg text-center font-normal text-black">
        If You Checked ANY Of The Boxes Above, Then You’re Invited To <span className="font-extrabold">Join The</span>

        <h2 className="font-extrabold text-lg md:text-3xl lg:text-4xl">“FUNNELS WITH AI WORKSHOP”</h2>
        </h3>
      </div>
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
    </div>
  );
};

export default FormBox;
