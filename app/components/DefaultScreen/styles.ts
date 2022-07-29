import { StatusBar, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: (StatusBar.currentHeight??0) + 32,
    paddingBottom: 32,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signOutButton: {
    position: 'absolute',
    right: 16,
    top: (StatusBar.currentHeight??0) + 24,
  }
});