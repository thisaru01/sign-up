import React from 'react';
import '../App';
import backgroundImage from '../assets/background.jpg';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
function SignUp() {
  return (
    <div className="flex items-center justify-start h-screen bg-cover bg-center  font-kulim" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="bg-white shadow-md rounded-lg w-[45%] h-[95%] p-6 flex flex-col items-center ml-5">

         <img src={logo1} alt="Logo1" className="w-10 h-10 mb-0.9" />
         <img src={logo2} alt="Logo1" className="w-40 h-400 mb-4" />

        <h1 className="text-2xl font-semibold mb-2 text-center">Ready to Learn?</h1>

        <p className="text-gray-600 text-center mb-6">
          Step in and start exploring quizzes tailored just for you!
        </p>

        <button className="border border-gray-300 text-black py-1 px-12 rounded-lg w-auto mb-4">
             Sign up with Google
        </button>

        <p className="text-gray-400 text-center mb-4">or</p>

        <form className="w-[75%] flex flex-col items-center mt-6 gap-2">
          <input
            type="text"
            placeholder="Username"
            className="w-[75%] py-2 px-6 mb-3 border border-gray-300 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[75%] py-2 px-6 mb-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-[75%] py-2 px-6 mb-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-[75%] py-2 px-6 mb-4 border border-gray-300 rounded-lg"
          />

          
          <button
            type="submit"
            className="bg-[#1b191c] text-[#fcfcfd] py-1 px-6 rounded-lg w-auto mx-auto mb-4"
          >
            Next
          </button>
        </form>

        <p className="text-center mt-1 text-sm">
          Already have an account? <a href="#" className="text-blue-500">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
