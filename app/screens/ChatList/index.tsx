import { View } from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import Logo from "../../assets/Logo.svg";
import { styles } from "./styles";
import { useState } from "react";
import { TabButton } from "../../components/TabButton";

export default function ChatList() {
  const [userButtonSelected, setUserButtonSelected] = useState(false);

  return (
    <DefaultScreen>
      <View style={styles.container}>
        <Logo style={styles.logo}/>
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
    </DefaultScreen>
  );
}
