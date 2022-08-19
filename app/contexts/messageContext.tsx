import React, { createContext, useContext, useEffect, useState } from "react";
import {
  auth,
  getConversationMessages,
  observerMessage,
} from "../firebase-config";
import { Message } from "../screens/Chat";
import { UserContext } from "./userContext";

type MessageContextType = {
  messages: Message[] | null;
  setMessages: (messages: Message[] | null) => void;
  currentChatUser: string,
  setCurrentChatUser: (currentChatUser: string) => void;
};

type MessageProviderType = {
  children: React.ReactNode;
};

export const MessageContext = createContext<MessageContextType>(
  {} as MessageContextType
);

export function MessageProvider({ children }: MessageProviderType) {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [currentChatUser, setCurrentChatUser] = useState("");
  const [hasNewMessage, setHasNewMessage] = useState(true);
  const { user } = useContext(UserContext);
  useEffect(() => {
    const getReceiverInfo = async () => {
      const messageResponse = (await getConversationMessages(
        user?.email,
        currentChatUser
      )) as Message[];
      setMessages(messageResponse);
    };
    getReceiverInfo();
    if(hasNewMessage){
        setHasNewMessage(false);
    }
  }, [currentChatUser, hasNewMessage]);

  useEffect(() => {
    observerMessage(setHasNewMessage);
  }, [])

  return (
    <MessageContext.Provider
      value={{ messages, setMessages, currentChatUser, setCurrentChatUser }}
    >
      {children}
    </MessageContext.Provider>
  );
}
