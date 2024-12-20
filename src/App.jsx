import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import backgroundImage2 from "./assets/background2.jpg";
import backgroundImage1 from "./assets/background.jpg";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  // Detect if the screen size is mobile
  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Animation variants for desktop view
  const loginVariants = {
    login: { x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
    signup: { x: "-100vw", transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const signupVariants = {
    login: { x: "100vw", transition: { duration: 1.2, ease: "easeInOut" } },
    signup: { x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  return (
    <div
      className="relative flex items-center h-screen bg-cover bg-center font-regular overflow-x-hidden transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${
          currentPage === "login" ? backgroundImage1 : backgroundImage2
        })`,
      }}
    >
      {isMobile ? (
        // Mobile View: Display only the current active component
        <div className="w-full h-full flex items-center justify-center pt-20">
          {currentPage === "login" ? (
            <Login handleNavigate={handleNavigate} />
          ) : (
            <SignUp handleNavigate={handleNavigate} />
          )}
        </div>
      ) : (
        // Desktop View: Animated sliding Login and SignUp
        <>
          <motion.div
            variants={loginVariants}
            animate={currentPage}
            className="absolute top-0 left-0 w-full md:w-3/2 lg:w-1/2 h-full p-2 md:p-6 flex items-center justify-center"
          >
            <Login handleNavigate={handleNavigate} />
          </motion.div>

          <motion.div
            variants={signupVariants}
            animate={currentPage}
            className="absolute top-0 right-0 w-full md:w-3/2  lg:w-1/2 h-full p-2 md:p-6 flex items-center justify-center"
          >
            <SignUp handleNavigate={handleNavigate} />
          </motion.div>
        </>
      )}
    </div>
  );
}

export default App;
