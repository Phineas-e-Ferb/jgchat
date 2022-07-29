import React from "react";
import get_time_from_milliseconds from '../../utils/get_time_from_milliseconds'
import { Text, View } from "react-native";

import { styles } from "./styles";

type MessageBallonType = {
  isSendedMessage: boolean;
  message: string;
  time: number;
};

export function MessageBallon({
  isSendedMessage,
  message,
  time,
}: MessageBallonType) {
  return (
    <View style={styles.container}>
      <Text
        style={isSendedMessage ? styles.sendedMessage : styles.receivedMessage}
      >
        {message}
      </Text>
      <Text
        style={
          isSendedMessage
            ? styles.sendedMessageTime
            : styles.receivedMessageTime
        }
      >
        {get_time_from_milliseconds(time)}
      </Text>
    </View>
  );
}
