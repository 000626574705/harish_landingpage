import React from "react";
import BonusCard from "./BonusCard";
import bonus1 from "../assets/bonus1.webp";
import bonus2 from "../assets/bonus2.webp";
import bonus3 from "../assets/bonus3.webp";
import Timer from "./Timer";

const BonusSection = () => {
  return (
    <div className="bg-white py-10 px-4 w-screen flex flex-col items-center justify-center gap-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        <BonusCard
          bonus={1}
          image={bonus1}
          content={"Landing Page Video Template"}
          price={999}
        />
        <BonusCard
          bonus={2}
          image={bonus2}
          content={"AI Tool To Make Ads Without Face"}
          price={2500}
        />
        <BonusCard
          bonus={3}
          image={bonus3}
          content={"Niche Finding Template"}
          price={3000}
        />
        <BonusCard
          bonus={4}
          image={bonus2}
          content={"lorem ipusm"}
          price={2000}
        />
      </div>

      <div className="mt-12 flex flex-col text-2xl lg:text-5xl items-center gap-5 text-center">
        <h3 className="font-medium">Get All This Inside The Workshop</h3>
        <h2 className="font-extrabold text-red-500 text-2xl lg:text-4xl">
          Total Value Of Bonuses: ₹12,000
        </h2>
        <h3 className=" text-2xl lg:text-4xl">
          Normal Workshop Ticket Price: <del>₹2000</del>
        </h3>
        <h1 className="text-green-600 text-3xl lg:text-5xl font-extrabold">
          Join Today At Just ₹299
        </h1>
        <h3 className="font-medium">
          Time is running out. Reserve your seat now!
        </h3>
      </div>
      <div className="mt-10">
        <Timer />
      </div>

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
  );
};

export default BonusSection;
