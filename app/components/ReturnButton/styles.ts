import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: (StatusBar.currentHeight??0) + 32,
    left: 24,
  }
});