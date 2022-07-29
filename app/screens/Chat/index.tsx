import { RouteProp } from "@react-navigation/native";
import { PaperPlaneTilt } from "phosphor-react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import { UserContext } from "../../contexts/userContext";
import { getUserInfo, sendMessage } from "../../firebase-config";

import { styles } from "./styles";

export type Receiver = {
  name: string,
  email: string
}

type ChatProps = {
  route: RouteProp<{ params: { email: string } }, 'params'>
}
export default function Chat({ route }: ChatProps) {
  const [receiver, setReceiver] = useState<Receiver>();
  const [message, setMessage] = useState('');
  const {user} = useContext(UserContext);
  const { email } = route.params;
  useEffect(() => {
    const getReceiverInfo = async () => {
      const response = await getUserInfo(email) as Receiver;
      setReceiver(response)
    }
    getReceiverInfo()
  }, [])

  const handleSendMessage = () => {
    sendMessage(message, receiver?.email, user?.email)
    setMessage('')
  }

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
          <Text style={styles.receiverName}>{receiver?.name}</Text>
          <Text style={styles.receiverEmail}>{receiver?.email}</Text>
        </View>
      </View>
      <ScrollView style={styles.messageList}></ScrollView>
      <View style={styles.inputContainer}>
        <TextInput style={styles.messageInput} placeholder="Escreva aqui..." multiline value={message} onChangeText={setMessage}/>
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <PaperPlaneTilt weight="fill" color="white" />
        </TouchableOpacity>
      </View>
    </DefaultScreen>
  );
}
