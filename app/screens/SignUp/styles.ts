import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        alignItems: 'center',
        paddingVertical: 64,
        paddingHorizontal: 32,
    },
    title: {
        ...fonts.title,
        fontSize: RFValue(24, 640),
        marginBottom: 16
    }
})