import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const URL = "ws://helpii-websocket.herokuapp.com/";
//works but seems to close after some time

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const username = useSelector((state) => state.username);

  const ws = new WebSocket(URL);

  const sendBackend = (e) => {
    console.log("submit");

    const message = {
      type: "chat",
      payload: { input, username },
    };
    if (input) {
      ws.send(JSON.stringify(message));
      setInput("");
    }
  };

  const addMessages = (msg) => {
    setMessages((previousMessages) => {
      return [...previousMessages, msg];
    });
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("connected");
    };

    ws.onmessage = (evt) => {
      console.log("test");

      console.log(evt.data);
      let type = JSON.parse(evt.data).type;
      let payload = JSON.parse(evt.data).payload;

      if (type === "chat") {
        addMessages(payload.input);
      }
      ws.onclose = (evt) => {
        console.log(`Closed session!!`);
      };
    };
  }, []);

  return (
    <div>
      <Chatbox>
        {messages.map((x, index) => {
          return (
            <p key={index}>
              {username}:{x}
            </p>
          );
        })}
      </Chatbox>
      <input onChange={(e) => setInput(e.target.value)} value={input}></input>
      <button onClick={sendBackend}>Send</button>
    </div>
  );
};

export default Chat;

const Chatbox = styled.div``;
