import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
    },
    textContainer: {
        paddingHorizontal: 8,
    },
    homeTitle: {
        ...fonts.title,
        textAlign: 'center',
        lineHeight: RFValue(20, 640),
        marginBottom: 4,
    },
    homeSubtitle: {
        ...fonts.subtitle,
        textAlign: 'center',
    },
    buttonsContainer: {
        alignItems: 'center',
    },
    signUpButton: {
        paddingHorizontal: 64,
        paddingVertical: 16,
        backgroundColor: colors.primary,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.62,
        elevation: 4,
        marginBottom: 16,
    },
    signUpText: {
        ...fonts.title,
        color: colors.background,
    },
    signInText: {
        ...fonts.title,
    }  
})