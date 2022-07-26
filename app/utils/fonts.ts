import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./colors";

export const fonts = {
    body: {
        fontSize: RFValue(12, 640),
        fontFamily: 'Exo_400Regular',
        color: colors.text,
    },
    title: {
        fontSize: RFValue(18, 640),
        fontFamily: 'Exo_700Bold',
        color: colors.text,
    },
    subtitle: {
        fontSize: RFValue(14, 640),
        fontFamily: 'Exo_300Light',
        color: colors.text,
    },
}