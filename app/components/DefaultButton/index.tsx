import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'
import React from 'react'
import { styles } from './styles'

type DefaultButtonInterface = {
    text: string,
    onPress: (event: GestureResponderEvent) => void
}

const DefaultButton = ({text, onPress} : DefaultButtonInterface) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default DefaultButton