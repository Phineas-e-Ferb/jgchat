import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const buttonStyle = {
    paddingVertical: 16,
    width: 140,
    borderRadius: 32,
}

export const styles = StyleSheet.create({
  activeButton: {
    ...buttonStyle,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  button: {
    ...buttonStyle,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  activeText: {
    ...fonts.title,  
    fontSize: RFValue(16, 640),
    color: 'white',
  },
  text: {
    ...fonts.subtitle,
    fontSize: RFValue(16, 640),
    color: colors.text,
  }
});