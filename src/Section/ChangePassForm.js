import React, { useState } from "react";
import FieldInput from "../Components/FieldInput";
import Button from "@material-ui/core/Button";
import axios from "axios";

const ChangePassForm = (props) => {
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendPasswordReset = (e) => {
    e.preventDefault();

    console.log("props:", props);
    const { userId, token } = props;

    console.log("userId", userId);
    console.log("token:", token);

    axios
      .post(`http://localhost:3001/reset_password/${userId}/${token}`, {
        password: password,
      })
      .then((response) => console.log("the response: ", response));

    // console.log("match? ", match);
  };

  return (
    <div>
      <h2>Update your password</h2>
      {submitted ? (
        <div>
          <p>Your password has been saved.</p>
          {/* link to login page */}
        </div>
      ) : (
        <div>
          <form onSubmit={sendPasswordReset}>
            <FieldInput
              title={"Enter your new password"}
              value={password}
              updateData={(e) => setPassword(e)}
            />
            <button>Update password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChangePassForm;
