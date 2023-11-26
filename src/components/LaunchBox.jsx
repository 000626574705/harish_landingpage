import React from "react";
import workshop from '../assets/workshop.webp'

const LaunchBox = () => {
  return (
    <div className="py-10 px-4 lg:px-10 w-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-lg md:text-3xl lg:text-4xl font-bold text-black">
        Launching Funnels Is{" "}
        <span className="text-white bg-green-600">NOT A HARD JOB Anymore!</span>
      </h1>

      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
        With easy access to some{" "}
        <span className="underline"> Free AI tools</span> and a{" "}
        <span className="underline">Proven System</span>, you can build your
        first or next high-converting funnel in just 3 Hours!
      </p>
      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
        Even if you’re a Beginner, have no prior experience And have never built a single funnel yet…
      </p>

      <p className="lg:px-20 text-base text-center md:text-xl lg:text-2xl">
      And That’s What Exactly I Am Going To Reveal In My Upcoming
      </p>

      <h1 className="text-center mt-2 text-xl md:text-3xl lg:text-4xl font-extrabold">“3 Hours Funnels With AI Workshop”</h1>

      <img src={workshop} alt="" className="w-full md:w-1/2 lg:w-1/3" />

      <a
        href="https://workshops.himanshuagrawal.com/step/checkout-woo/"
        className="mt-2 text-white py-2 lg:py-3 px-6 md:px-16 lg:px-20 rounded-lg bg-btn_red flex flex-col items-center"
      >
        <span className="text-lg lg:text-2xl font-bold">
          {">> Yes I want consistent profits"}
        </span>
        <span className="text-base lg:text-xl">(ONLY ₹299)</span>
      </a>
    </div>
  );
};

export default LaunchBox;
