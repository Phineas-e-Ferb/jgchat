import { View } from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import Logo from "../../assets/Logo.svg";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { TabButton } from "../../components/TabButton";
import ListCard from "../../components/ListCard";
import List, { UserChatType } from "./List";
import { listCollection } from "../../firebase-config";
import { DocumentData } from "firebase/firestore";

export default function UserChatList() {
  const [userButtonSelected, setUserButtonSelected] = useState(false);
  const [users, setUsers] = useState<UserChatType[]>();

  useEffect(() => {
    const getUserList = async () => {
      const userList = await listCollection('user');
      const mappedUser = userList?.map((user) => {
        return {
          name: user.name as string,
          email: user.email as string
        }
      })
      setUsers(mappedUser);
    }
    getUserList()
  }, [])
  return (
    <DefaultScreen>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.buttonContainer}>
          <TabButton
            title="Chats"
            onPress={() => setUserButtonSelected(false)}
            active={!userButtonSelected}
          />
          <TabButton
            title="Usuários"
            onPress={() => setUserButtonSelected(true)}
            active={userButtonSelected}
          />
        </View>
        <List data={userButtonSelected ? users! : []} />
      </View>
    </DefaultScreen>
  );
}
