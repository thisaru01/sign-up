import React, { useState } from "react";
import "../App";
import backgroundImage from "../assets/background.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import { IoPersonCircleOutline, IoEyeOutline, IoEyeOffOutline, IoLockClosedOutline, IoMailOutline, IoCallOutline, IoLogoGoogle } from "react-icons/io5";


function SignUp({ handleNavigate }) {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    handleNavigate("login"); 
  };

  return (
    <div
      className="flex items-center justify-center md:justify-start h-screen md:h-screen bg-cover bg-center font-regular"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
       <div className="bg-white shadow-md rounded-lg  sm:w-[75%] md:w-[45%] md:h-[95%] sm:h-[95%] h-[95%]  p-6 flex flex-col items-center mx-auto md:ml-5">
      
        <img src={logo1} alt="Logo1" className="w-12 h-12 mb-0" />
        <img src={logo2} alt="Logo2" className="w-40 h-30 mb-0" />

        <h1 className="text-4xl font-bold mb-2 text-center">
          Ready to Learn?
        </h1>

        <p className="text-gray-600 font-semibold text-center mb-6">
          Step in and start exploring quizzes tailored just for you!
        </p>

        <button className="flex items-center border border-gray-500 text-gray-500  py-[4px] px-[15%] rounded-xl w-auto mb-6">
          <IoLogoGoogle className="text-2xl mx-2 my-1 text-gray-600" />
          Sign up with Google
        </button>

        <div className="flex items-center justify-center mb-6 w-[70%]">
          <div className="flex-grow border-t-[3px] border-[#c6c5c6]"></div>
          <p className="mx-4 text-black">or</p>
          <div className="flex-grow border-t-[3px] border-[#c6c5c6]"></div>
        </div>

        <form className=" sm:w-[75%] md:w-[62%] md:h-[75%] flex flex-col items-center gap-2">

          <div className="flex items-center w-full py-[1px] px-6 mb-3 border border-gray-500 rounded-xl gap-4">
            <IoPersonCircleOutline className="text-gray-400 m-2 text-2xl" />
            <input
              type="text"
              placeholder="Username"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center w-full py-[1px] px-6 mb-3 border border-gray-500 rounded-xl relative">
            <IoLockClosedOutline className="text-gray-400 m-2 text-2xl" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full outline-none ml-4"
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

          <div className="flex items-center w-full py-[1px] px-6 mb-3 border border-gray-500 rounded-xl gap-4">
            <IoMailOutline className="text-gray-400 m-2 text-2xl" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none"
            />
          </div>

          <div className="flex items-center w-full py-[1px] px-6 mb-4 border border-gray-500 rounded-xl gap-4">

            <IoCallOutline className="text-gray-400 m-2 text-2xl" />

            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1b191c] text-[#fcfcfd] py-[5px] px-6 rounded-lg w-auto mx-auto mb-5"
          >
            Next
          </button>
        </form>

        <p className="text-center mt-1 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-black ml-2" onClick={handleLoginRedirect}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
