"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BsList, BsX } from "react-icons/bs";
const styles = {
  navLink:
    "curser-pointer ml-10 mr-8 text-sm mt-2 text-xl font-medium text-black hover:text-emerald-500 border-b-2 hover:border-emerald-500 hover:transition delay-150 duration-300 ease-in-out",
  sidebarLink:" flex cursor-pointer py-4 text-xl bg-transparent hover:bg-stone-200/25 items-center justify-center text-black hover:text-emerald-500 hover:transition delay-150 duration-300 ease-in-out "
  };
function Headernav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };
  return (
    <header className="shadow-lg  z-200">
      <nav className="w-full h-16 bg-stone-100">
        {/* desktop menu */}
        <div className="flex items-center justify-between place-content-center h-full px-4 w-full">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={15}
              className="cursor-pointer py-1 "
            />
          </Link>
          <div className="sm:flex">
            <ul className="hidden sm:flex ">
              <li className={styles.navLink}>
                <Link href="/seller">
                  Farmers
                </Link>
              </li>
              <li className={styles.navLink}>
                <Link href="/buyer">
                  Consumer
                </Link>
              </li>
              <li className={styles.navLink}>
                <Link href="/transport">Transport</Link>
              </li> 
              {/* <li className={styles.navLink}>
                <Link href="/crop">
                  Crop
                </Link>
              </li>  */}

              <li className={styles.navLink}>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li className={styles.navLink}>
                <Link href="/about">About</Link>
              </li>
              {/* <li className={styles.navLink}>
                <Link href="/account">Account</Link>
              </li> */}
              <li className=" flex mr-12 ml-40 items-center space-x-5 text-yellow-300 text-xl">
               <Link href="/auth/login">
               <h3 className=" animate-bounce repeat-5 ... duration-10000  hover:animate-none delay-100 shadow-sm  cursor-pointer px-4 py-1 rounded-sm bg-emerald-500 text-black">
                  Sign In
                </h3>
               </Link>
              </li>
            </ul>
          </div>
          {/* mobile menu */}
          <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-16 ">
            <BsList className="h-8 w-8 text-emerald-500 bg-transparent hover:text-black hover:transition delay-150 duration-300 ease-in-out" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] z-10  sm:hidden h-screen bg-emerald-500/20 backdrop-blur-xl  p-8 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <BsX className="h-10 w-10 text-emerald-500 bg-transparent hover:text-black hover:transition delay-150 duration-300 ease-in-out" />
            </div>
          </div>
          {/* small screen view after clicking the three bars */}
          <div className="flex-col py-4 -pl-5">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.sidebarLink}
              >
                <Link className="flex items-center" href="/seller">
                  Sell here
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.sidebarLink}
              >
                <Link className="flex items-center" href="/buy">
                  Buy
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.sidebarLink}
              >
                <Link className="flex items-center" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.sidebarLink}
              >
                <Link className="flex items-center" href="/About">
                  About
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.sidebarLink}
              >
                <Link className="flex items-center" href="/Account">
                  Account
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="flex items-center py-4 text-xl "
              >
                <p className="w-full text-center cursor-pointer border border-red-400 px-4 py-1 rounded-sm bg-emerald-500 text-black hover:text-white hover:bg-emerald-600/75">
                  Sign In
                </p>
              </li>
            </ul>
          </div>
          {/* social media links */}
        </div>
      </nav>
    </header>
  );
}

export default Headernav;
