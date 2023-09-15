
"use client";
import Lottie from "react-lottie-player";
import lottieJson from "@/public/svg/login.json";
function login() {
  return (
    <>
      {/* starting parent for login */}
      <div className="flex h-screen bg-gradient-to-r from-stone-200 from-10% via-lime-200 via-70% to-emerald-400 to-95% ...">
        <div className=" grid grid-cols-2 gap-4 -mt-32 place-content-evenly place-items-center  ">
          {/* this is the left side of login page */}
          <div className="flex mr-36 ml-36 ">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 500, height: 500 }}
            />
          </div>
          {/* right side of the login page */}
          <div className=" w-max  py-8 px-12  border border-b-green-500 rounded-lg bg-green-500/50">
            <h2 className="text-2xl font-semibold text-lime-800">Login</h2>
            <p className="text-sm mt-4 text-lime-800 ">
              If you already a member, easily login and securely
            </p>

            <form action="" className="flex flex-col gap-4">
              <input
                className="border rounded-xl p-2 mt-6"
                type="text"
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="border rounded-xl p-2 w-full"
                  type="password"
                  placeholder="Password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 cursor-pointer -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-green-700 p-1 rounded-xl text-white py-2 hover:scale-105 duration-300 hover:bg-green-700/75 ">
                Login
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center text-green-800  ">
              <hr className="border-green-900" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-green-900" />
            </div>

            {/* login with google and facebook */}
            <div className="">
              <button
                className="flex flex-row bg-white border text-sm rounded-lg mt-5 
w-full py-2 hover:scale-105 duration-300 justify-center "
              >
                Login with Google
              </button>
              <p
                className=" cursor-pointer mt-5 border-b border-gray-400 
  text-xs py-3 hover:underline "
              >
                Forgot your password ?
              </p>
              <div className="mt-3 text-xs flex justify-between items-center">
                <p> Don t have an account?</p>
                <button
                  className="py-2 px-3 border text-center
 bg-white rounded-xl hover:scale-110 duration-300 "
                >
                  {" "}
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login