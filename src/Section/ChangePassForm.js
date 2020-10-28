import React, { useState, useEffect } from "react";
import FieldInput from "../Components/FieldInput";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ChangePassForm = (props) => {
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const history = useHistory();

  useEffect(() => {
    console.log("yo it's me the first render! ");
    axios
      .get(`http://localhost:3001/reset_password/${props.id}/${props.token}`)
      .then((response) => {
        console.log("response GET:", response);
        setShowForm(true);
      })
      .catch((error) => console.log("Error authorization:", error));
  }, []);

  const sendPasswordReset = (e) => {
    e.preventDefault();

    const { id, token } = props;

    console.log("userId", id);
    console.log("token:", token);

    axios
      .post(`http://localhost:3001/reset_password/${id}/${token}`, {
        password: password,
      })
      .then((response) => {
        console.log("response POST: ", response);
        setSubmitted(true);
      })
      .catch((error) => console.log("Error attempting to change pw"));
  };

  const directToLogin = () => {
    history.push("/auth");
  };

  return (
    <div>
      {showForm ? (
        <div>
          <h2>Update your password</h2>
          {submitted ? (
            <div>
              <p>Your password has been saved.</p>
              <button onClick={directToLogin}>Sign back in</button>
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
      ) : (
        <p>No access</p>
      )}
    </div>
  );
};

export default ChangePassForm;
