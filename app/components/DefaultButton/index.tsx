import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

type DefaultButtonInterface = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const DefaultButton = ({ text, onPress, disabled }: DefaultButtonInterface) => {
  return (
    <TouchableOpacity
      style={
        disabled
          ? { ...styles.button, backgroundColor: colors.textLighter }
          : styles.button
      }
      onPress={onPress}
      disabled={disabled || false}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
