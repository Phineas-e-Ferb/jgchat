import { View, Text, TextInput } from 'react-native'
import * as Icon from "phosphor-react-native";
import React from 'react'
import { styles } from './styles';

type IconTextInputType = {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  placeholder: string,
  obscureText?: boolean,
  children: React.ReactNode,
}

const IconTextInput = ({ value, setValue, placeholder, obscureText, children }: IconTextInputType) => {
  return (
    <View style={styles.container}>
      {children}
      <TextInput style={styles.input} value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={obscureText || false} />
    </View>
  )
}

export default IconTextInput