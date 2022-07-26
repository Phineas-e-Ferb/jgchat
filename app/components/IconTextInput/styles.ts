import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 32,
        
    },
    input: {
        ...fonts.body,
        borderBottomColor: colors.textLighter,
        borderBottomWidth: 1,
        width: RFValue(312, 640),
        fontSize: RFValue(16, 640),
        marginLeft: 4,
        paddingVertical: 4
    }
})