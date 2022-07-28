import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 64,
    paddingHorizontal: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signOutButton: {
    position: 'absolute',
    right: 16,
    top: 48,
  }
});