import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export const styles = StyleSheet.create({
  receiverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  receiverImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 8,
  },
  receiverName: {
    ...fonts.title,
  },
  receiverEmail: {
    ...fonts.subtitle,
  },
  messageList: {
    width: '100%',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  messageInput: {
    width: '80%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.textLighter,
    fontSize: RFValue(14, 640),
    marginRight: 16
  },
  sendButton: {
    width: 48,
    height: 48,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 100
  }
});