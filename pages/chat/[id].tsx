import Chatscreen from "@/components/ChatScreen";
import Sidebar from "@/components/SideBar";
import Head from "next/head";
import React from "react";
import styled from "styled-components";

// @ts-ignore
function Chat({ chat, messages }) {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>This is chat</h1>
      {/* <Sidebar /> */}
      <ChatContainer>
        <Chatscreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div``;
