import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    listCardContainer: {
        backgroundColor: 'white',
        width: 360,
        padding: 12,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    userInfo: {
        flexDirection: 'row',
    },
    userPic: {
        width: 64,
        height: 64,
        borderRadius: 30,
        marginRight: 12,
    },
    textContainer: {
        justifyContent: 'space-evenly'
    },
    usernameText: {
        ...fonts.title,
    },
    secondaryInfoText: {
        ...fonts.body,
        fontSize: RFValue(14, 640),
    }

})