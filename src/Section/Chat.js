import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const URL = "ws://helpii-websocket.herokuapp.com/";

class Chat extends Component {
  state = {
    messages: [],
    input: "",
  };

  ws = new WebSocket(URL);

  sendBackend = (e) => {
    console.log("send");
    e.preventDefault();

    // console.log(this.state.input);
    const message = {
      type: "chat",
      payload: this.state.input,
    };

    this.ws.send(JSON.stringify(message));
  };

  addMessages = (msg) => {
    let obj = this.state.messages;
    obj.push(msg);
    this.setState({
      message: obj,
    });
  };

  componentDidMount = () => {
    this.ws.onopen = () => {
      console.log("connected");
    };

    this.ws.onmessage = (evt) => {
      console.log("test");
      console.log(evt.data);
      let type = JSON.parse(evt.data).type;
      let payload = JSON.parse(evt.data).payload;

      if (type == "chat") {
        this.addMessages(payload);
      }
    };

    this.ws.onclose = (evt) => {
      console.log(`Closed session!!`);
    };
  };

  render() {
    // const [input, setInput] = useState(null);
    // const [chatMessage, setChatMessage] = useState([]);

    return (
      <div>
        <Chatbox>
          {this.state.messages.map((x, index) => {
            return <p key={index}>{x}</p>;
          })}
        </Chatbox>
        <input
          onChange={(e) => this.setState({ input: e.target.value })}
        ></input>
        <button onClick={this.sendBackend}>click me</button>
      </div>
    );
  }
}

export default Chat;

const Chatbox = styled.div``;
