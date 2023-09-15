"use client"
import Lottie from "react-lottie-player";
import TypewriterText from "../components/typerwriter";
import truck from "@/public/svg/home1.json"
import list2 from "@/public/svg/list2.json"
import chair from "@/public/svg/chair.json"
import secure from "@/public/svg/secure.json"
import Image from "next/image";
import Headernav from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Headernav />
      <div className="flex flex-col items-center ">
        {/* first heading */}
        <motion.div
        initial={{x:-200,opacity:0, scale: 0.8,y:0 }}
          animate={{x:100,opacity:1, y:0,
            scale: 1.2 }
          
        }
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="flex pb-36 ">
            <div className=" text-5xl justify-start w-3/4 font-bold mx-12 mt-24 mb-4 ">
              Sell grains at the price you want
              <div className="text-2xl justify-start w-3/4 font-bold my-4">
                <TypewriterText text="Have the power of Selling in your hands" />
              </div>
            </div>
            <div className="flex ">
              <Lottie
                className="flex mr-12"
                loop
                animationData={truck}
                play
                style={{ width: 400, height: 400 }}
              />
            </div>
          </div>
        </motion.div>
        {/* second heading */}
        <div className="flex ">
          <div className="flex">
            <Lottie
              className="flex mr-12 ml-40"
              loop
              animationData={list2}
              play
              style={{ width: 400, height: 400 }}
            />
          </div>

          <div className="justify-end pl-36">
            <div className="text-4xl justify-start  w-3/4 font-bold mx-24 mt-24 mb-4">
              List your products and decide it's price
            </div>
            <div className="text-xl justify-end w-3/4 font-bold mx-24 mt-2 mb-4">
              Get your products certified and place Online in sellers list
            </div>
          </div>
        </div>
        {/* third heading */}
        <div className="flex pt-16">
          <div className="justify-end pt-20">
            {" "}
            <div className="text-4xl justify-end w-3/4 font-bold mx-24 mt-24 mb-4">
              Buy from the best sellers around your area
            </div>
            <div className="text-xl justify-end w-3/4 font-bold mx-24 mt-2 mb-4">
              All the products listed online are verified and from authantic
              seller and farmers
            </div>
          </div>
          <div className="flex ">
            <Lottie
              className="flex mr-12 ml-20"
              loop
              animationData={chair}
              play
              style={{ width: 400, height: 400 }}
            />
          </div>
        </div>
        {/* fourth heading */}
        <div className="flex pt-16">
          <div className="">
            <Lottie
              className="flex mr-12 ml-20 mt-20"
              loop
              animationData={secure}
              play
              style={{ width: 400, height: 400 }}
            />
          </div>

          <div className="justify-end pl-36 mt-20">
            <div className="text-4xl justify-start  w-3/4 font-bold mx-16  mt-24 mb-4">
              Your data and identity are private
            </div>
            <div className="text-xl justify-end w-3/4 font-bold mx-16 mt-2 mb-4">
              We keep your data secure and your identity private.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
