import React, { useState } from "react";
import "../App";
import backgroundImage from "../assets/background2.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { IoPersonCircleOutline, IoEyeOutline, IoLockClosedOutline, IoLogoGoogle, IoEyeOffOutline,} from "react-icons/io5";

function Login({ handleNavigate }) {

    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSignUpRedirect = (e) => {
      e.preventDefault();
      handleNavigate("signup"); 
    };

  return (
    <div
      className="flex items-center justify-center md:justify-between h-screen bg-cover bg-center font-regular"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hidden md:block w-1/2 h-full"></div>

      <div className="bg-white shadow-md rounded-lg  sm:w-[75%] md:w-[45%] md:h-[95%] sm:h-[95%] h-[95%]  p-6 flex flex-col items-center m-5">

        <img src={logo1} alt="Logo1" className="w-12 h-12 mt-9 mb-0" />
        <img src={logo2} alt="Logo2" className="w-40 h-30 mb-0" />

        <h1 className="text-4xl font-bold mb-2 text-center">Step Back In</h1>

        <p className="text-gray-600 font-semibold text-center mb-8">
          Pick up right where you left off and keep the learning going!
        </p>

        <button className="flex items-center border border-gray-500 text-gray-500  py-[4px] px-[15%] rounded-xl w-auto mb-7">
          <IoLogoGoogle className="text-2xl mx-2 my-1 text-gray-600" />
          Log in with Google
        </button>

        <div className="flex items-center justify-center mb-7 w-[70%]">
          <div className="flex-grow border-t-[3px] border-[#c6c5c6]"></div>
          <p className="mx-4 font-semibold text-black">or</p>
          <div className="flex-grow border-t-[3px] border-[#c6c5c6]"></div>
        </div>

        <form className="sm:w-[75%] md:w-[62%] flex flex-col items-center gap-2">
            
          <div className="flex items-center w-full py-[1px] px-6 mb-3 border border-gray-500 rounded-xl gap-4">

            <IoPersonCircleOutline className="text-gray-400 mx-1 my-2 text-2xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none mx-1"
            />
          </div>

          <div className="flex items-center w-full py-[1px] px-6 mb-12 border border-gray-500 rounded-xl relative">
            <IoLockClosedOutline className="text-gray-400 my-2 ml-1 mr-4 text-2xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none ml-[6px]"
            />
            {showPassword ? (
              <IoEyeOffOutline
                className="text-gray-400 mr-2 text-2xl cursor-pointer absolute right-2"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <IoEyeOutline
                className="text-gray-400 mr-2 text-2xl cursor-pointer absolute right-2"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-[#1b191c] text-[#fcfcfd] py-[5px] px-6 rounded-lg w-auto mx-auto mb-12"
          >
            Log In
          </button>
        </form>

        <p className="text-center mb-1 text-sm">
          Don’t have an account? {" "}
          <a href="#" className="text-black ml-2" onClick={handleSignUpRedirect}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
