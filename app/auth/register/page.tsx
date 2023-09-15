"use client"
import React from "react";
import Image from "next/image";
import Lottie from "react-lottie-player";
import lottieJson from "@/public/svg/farmerreg.json"
import {BsPersonBoundingBox} from "react-icons/bs";
function register() {
  return (
    <>
      {/*main canvas  */}
      <div className="flex items-center justify-center bg-stone-200 ease-in-out">
        {/* internal grid box */}
        <div className="grid lg:grid-cols-2 my-6 p-10 relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center ">
          {/* background image  */}
          <div className="absolute w-full -Z-10">
            <Image src="/reg.jpg" className="opacity-75" alt="hero" width={3000} height={400}/>
          </div>
          {/* left side image */}
          <div className="felx flex-col">
            {/* <Lottie
              className="flex mr-12"
              loop
              animationData={lottieJson}
              play
              style={{ width: 550, height: 550 }}
            /> */}
          </div>
          {/* right side main */}
          <div className="flex flex-col justify-center items-center bg-white bg-opacity-30 backdrop-blur-lg rounded-lg drop-shadow-lg mx-20 my-12 py-12 px-14">
            <div className="flex h-36 w-36 bg-white justify-center items-center rounded-md">
              <BsPersonBoundingBox className="h-12 w-12 animate-pulse" />
            </div>
            <p className="py-4">Click here to take your Photograph</p>
            <div className="flex">
              <form action="submit" className="flex flex-col gap-4 ">
                <input
                  type="text"
                  placeholder="Complete Name"
                  className="flex items-center justify-center text-center px-14 rounded-lg py-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="flex items-center justify-center text-center px-14 rounded-lg py-2"
                />
                <input
                  type="text"
                  placeholder="Email Id"
                  className="flex items-center justify-center text-center px-14 rounded-lg py-2"
                />
                <button className="flex items-center justify-center rounded-md  bg-emerald-500 hover:border-collapse text-center text-white py-2 hover:bg-emerald-300 hover:text-emerald-800 hover:border hover:border-emerald-600  ">
                  {" "}
                  Submit this form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
