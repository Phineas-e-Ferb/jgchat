import { View } from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import Logo from "../../assets/Logo.svg";
import { styles } from "./styles";
import { useContext, useEffect, useState } from "react";
import { TabButton } from "../../components/TabButton";
import List, { UserChatType } from "./List";
import { listCollection } from "../../firebase-config";
import { UserContext } from "../../contexts/userContext";

export default function UserChatList({ navigation }: any) {
  const [userButtonSelected, setUserButtonSelected] = useState(false);
  const [users, setUsers] = useState<UserChatType[]>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getUserList = async () => {
      const userList = await listCollection("user");
      const mappedUser = userList
        ?.filter((userData) => userData.email.toLowerCase() !== user?.email?.toLowerCase())
        .map((userData) => {
          return {
            name: userData.name as string,
            email: userData.email as string,
          };
        });
      setUsers(mappedUser);
    };
    getUserList();
  }, []);

  const navigationToChatScreen = (email: string) => {
    navigation.navigate("Chat", {
      email,
    });
  };
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
      </View>
      <List
        data={userButtonSelected ? users! : []}
        navigationToChatScreen={navigationToChatScreen}
      />
    </DefaultScreen>
  );
}
