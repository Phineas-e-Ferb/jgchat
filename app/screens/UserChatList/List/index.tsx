import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import ListCard from "../../../components/ListCard";
export type UserChatType = {
  name: string;
  email?: string;
  photo?: string;
  lastMessage?: string;
  time?: string;
};

type ItemType = {
  data: UserChatType;
  navigationToChatScreen: () => void;
};

type ListType = {
  data: UserChatType[];
  navigationToChatScreen: () => void;
};

const Item = ({ data, navigationToChatScreen }: ItemType) => (
  <ListCard
    username={data.name}
    secondaryInfo={data.email ?? data.lastMessage ?? ""}
    isChatCard={!!data.lastMessage}
    navigationToChatScreen={navigationToChatScreen}
  />
);
const List = ({ data, navigationToChatScreen }: ListType) => {
  const renderItem: ListRenderItem<UserChatType> = ({ item }) => (
    <Item data={item} navigationToChatScreen={navigationToChatScreen} />
  );
  return (
    <FlatList<UserChatType>
      style={{ width: "100%" }}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
};

export default List;
