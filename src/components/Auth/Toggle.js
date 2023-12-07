
import React, { useState } from "react";
import Register from './Register';
import Login from './Login';



const Toggle = () => {
  const [isRegisterForm, setIsRegisterForm] = useState(true);

  const toggleForm = () => {
    setIsRegisterForm(!isRegisterForm);
  };

  return (
    <div >
      {isRegisterForm ? <Register toggleForm={toggleForm} /> : <Login toggleForm={toggleForm} />}
    </div>
  );
};

export default Toggle;

