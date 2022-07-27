import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 16,
        width: '100%',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 8
    },
    buttonText: {
        ...fonts.title,
        color: 'white'
    }
})