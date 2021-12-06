import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function SidebarChat() {
  return (
    <SidebarChatbox>
      <Avatar />
      <SidebarInfo>
        <h2>Room Name</h2>
        <p>This is the last message</p>
      </SidebarInfo>
    </SidebarChatbox>
  );
}
const SidebarChatbox = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;

  &:hover {
    background-color: #ebebeb;
  }
`;
const SidebarInfo = styled.div`
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  margin-left: 15px;
`;
export default SidebarChat;
