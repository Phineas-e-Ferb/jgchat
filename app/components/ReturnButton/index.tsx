import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function ReturnButton({navigation}: any) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
        <ArrowLeft weight='bold'/>
    </TouchableOpacity>
  );
}