import { PaperPlaneTilt } from "phosphor-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";

import { styles } from "./styles";

export default function Chat() {
  const receiver = {
    name: "Gabriel Sabanai",
    email: "sabagames@gmail.com",
  };
  return (
    <DefaultScreen dontShowSignout>
      <View style={styles.receiverInfo}>
        <Image
          style={styles.receiverImage}
          source={{
            uri: "https://criadoresid.com/wp-content/uploads/2016/10/Captura-de-Tela-2020-03-16-a%CC%80s-13.59.50.png",
          }}
        />
        <View>
          <Text style={styles.receiverName}>{receiver.name}</Text>
          <Text style={styles.receiverEmail}>{receiver.email}</Text>
        </View>
      </View>
      <ScrollView style={styles.messageList}></ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.messageInput} placeholder="Escreva aqui..." multiline/>
        <TouchableOpacity style={styles.sendButton}>
          <PaperPlaneTilt weight="fill" color="white"/>
        </TouchableOpacity>
      </View>
    </DefaultScreen>
  );
}
