import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { fonts } from '../../utils/fonts';

export const styles = StyleSheet.create({
  illustration: {
    marginTop: 32,
  },
  title: {
    ...fonts.title,
    fontSize: RFValue(24, 640),
  }
});