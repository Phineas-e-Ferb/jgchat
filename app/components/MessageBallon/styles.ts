import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

const messageStyles = {
    ...fonts.body,
    padding: 8,
    borderRadius: 8,
    fontSize: RFValue(14, 640),
    marginBottom: 8,
}

const messageTimeStyles = {
    ...fonts.subtitle,
    fontSize: RFValue(11, 640),
}

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
  sendedMessage: {
    ...messageStyles,
    backgroundColor: 'rgba(158, 89, 170, 0.3)',
    borderBottomRightRadius: 0,
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    ...messageStyles,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 0,
    alignSelf: 'flex-start',
    color: 'white'
  },
  sendedMessageTime: {
    ...messageTimeStyles,
    alignSelf: 'flex-end',
  },
  receivedMessageTime: {
    ...messageTimeStyles,
    alignSelf: 'flex-start',
  }
});