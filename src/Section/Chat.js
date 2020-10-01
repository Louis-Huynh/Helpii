import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chat = () => {
  const URL = "ws://localhost:8080/";
  const ws = new WebSocket(URL);

  const [input, setInput] = useState(null);

  const sendBackend = (e) => {
    e.preventDefault();

    const message = {
      type: "chat",
      payload: input,
    };

    this.ws.send(JSON.stringify(message));
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      console.log(`[message] Data receive from server: ${evt.data}`);
    };

    ws.onclose = (evt) => {
      console.log(`Closed session!!`);
    };
  }, []);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onSubmit={sendBackend}>click me</button>
    </div>
  );
};

export default Chat;
