import Chatscreen from "@/components/ChatScreen";
import Sidebar from "@/components/SideBar";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  orderBy,
  query,
  getDocs,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";

import { db, auth } from "../../firebase";

import getRecipientEmail from "../utils/getRecipientEmail";
// @ts-ignore
function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>This is chat {getRecipientEmail(chat.users, user)}</h1>
      <Sidebar />
      <ChatContainer>
        <Chatscreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context: any) {
  const docRef = doc(db, `chats/${context.query.id}`);
  const colRef = collection(db, `chats/${context.query.id}/messages`);

  // PREP the messages on the server
  const messagesQuery = query(colRef, orderBy("timestamp", "asc"));
  const messagesRes = await getDocs(messagesQuery);

  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((msgs) => ({
      ...msgs,
      // @ts-ignore
      timestamp: msgs.timestamp.toDate().getTime(),
    }));

  // PREP the chats
  const chatRes = await getDoc(docRef);
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  console.log(messages, chat);

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div``;
