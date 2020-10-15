import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ForgotPassword = (event) => {
  const [email, setEmail] = useState("");

  const forgotPassword = () => {
    // event.preventDefault();
    console.log("cheese pizza");
    axios
      .post("http://localhost:3001/reset_password", {
        email: email,
      })
      .then((response) => {
        console.log("da response: ", response);
      })
      .catch((error) => {
        console.log("error forgot: ", error);
      });
  };

  const handleEmailChange = (event) => {
    console.log("email", email);
    setEmail(event.target.value);
  };

  return (
    <div>
      <p>Email</p>
      <input value={email} onChange={handleEmailChange} />
      <button type="submit" onClick={forgotPassword}>
        Submit
      </button>
    </div>
  );
};

export default ForgotPassword;
