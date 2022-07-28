import React from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import ListCard from '../../../components/ListCard'
export type UserChatType = {
  name: string,
  email?: string,
  photo?: string,
  lastMessage?: string,
  time?: string
}


type ItemType = {
  data: UserChatType
}

type ListType = {
  data: UserChatType[]
}

const Item = ({ data }: ItemType) => (
  <ListCard
    username={data.name}
    secondaryInfo={data.email ?? data.lastMessage ?? ""}
    onPress={()=>{}}
    isChatCard={!!data.lastMessage}
  />
)
const List = ({ data }: ListType) => {
  const renderItem : ListRenderItem<UserChatType> = ({item}) => <Item data={item}/>
  return (
    <FlatList<UserChatType>
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      />
  )
}

export default List