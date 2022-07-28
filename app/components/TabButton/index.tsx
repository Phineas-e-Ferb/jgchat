import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type TabButtonType = {
    title: string,
    onPress: () => void,
    active: boolean,
}

export function TabButton( {title, onPress, active}:TabButtonType ) {
  return (
    <TouchableOpacity style={active ? styles.activeButton : styles.button} onPress={onPress}>
      <Text style={active ? styles.activeText : styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}