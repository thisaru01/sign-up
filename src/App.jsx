import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); 

  const handleNavigate = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div>
      {currentPage === "signup" ? (
        <SignUp handleNavigate={handleNavigate} />
      ) : (
        <Login handleNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
