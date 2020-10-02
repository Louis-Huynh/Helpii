import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chat = () => {
  const URL = "ws://localhost:8080/";
  const ws = new WebSocket(URL);

  const [input, setInput] = useState(null);
  const [chatMessage, setChatMessage] = useState([]);

  const sendBackend = (e) => {
    console.log("send");
    e.preventDefault();

    const message = {
      type: "chat",
      payload: input,
    };

    ws.send(JSON.stringify(message));
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      // console.log(`[message] Data receive from server: ${evt.data}`);
      let tempArr = chatMessage;
      tempArr.push(JSON.parse(evt.data).payload);
      setChatMessage(tempArr);
    };

    ws.onclose = (evt) => {
      console.log(`Closed session!!`);
    };
  }, []);

  return (
    <div>
      <Chatbox>
        {chatMessage.map((x, index) => {
          return <p key={index}>{x}</p>;
        })}
      </Chatbox>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={sendBackend}>click me</button>
    </div>
  );
};

export default Chat;

const Chatbox = styled.div``;
