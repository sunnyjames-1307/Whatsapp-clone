import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  SearchOutlined,
} from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "../axios";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "DEMO APP",
      timestamp: "Just Now!",
      received: false,
    });

    setInput("");
  };
  return (
    <Chatbox>
      <Header>
        <Avatar />
        <HeaderInfo>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </HeaderInfo>
        <HeaderRight>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderRight>
      </Header>
      <ChatBody>
        {messages.map((message) => {
          return !message.received ? (
            <ChatMessage>
              <Span1>{message.name}</Span1>
              {message.message}
              <Span2>{message.timestamp}</Span2>
            </ChatMessage>
          ) : (
            <ChatReciever>
              <Span1>{message.name}</Span1>
              {message.message}
              <Span2>{message.timestamp}</Span2>
            </ChatReciever>
          );
        })}

        {/* <ChatMessage>
          <Span1>Sunny</Span1>This is a message
          <Span2>{new Date().toUTCString()}</Span2>
        </ChatMessage>
        <ChatMessage>
          <Span1>Sunny</Span1>This is a message
          <Span2>{new Date().toUTCString()}</Span2>
        </ChatMessage> */}
      </ChatBody>
      <ChatFooter>
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a nessage
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </ChatFooter>
    </Chatbox>
  );
}
const Chatbox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
`;
const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;
const HeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
  h3 {
    margin-bottom: 3px;
    font-weight: 500px;
  }
  p {
    color: gray;
  }
`;
const HeaderRight = styled.div``;
const ChatBody = styled.div`
  flex: 1;
  background-image: url(${"https://wallpaperaccess.com/full/1288099.jpg"});
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: scroll;
`;
const ChatMessage = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 30px;
`;
const Span1 = styled.span`
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: xx-small;
  color: white;
`;
const Span2 = styled.span`
  margin-left: 10px;
  font-size: xx-small;
`;
const ChatReciever = styled(ChatMessage)`
  margin-left: auto;
  background-color: #dcf8c6;
`;
const ChatFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;

  form {
    flex: 1;
    display: flex;
    input {
      flex: 1;
      border-radius: 30px;
      padding: 10px;
      border: none;
      outline-width: 0;
    }
    button {
      display: none;
    }
  }
  .MuiSvgIcon-root {
    padding: 10px;
    color: gray;
  }
`;
export default Chat;
