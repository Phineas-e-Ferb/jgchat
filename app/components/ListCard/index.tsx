import { Chats } from "phosphor-react-native";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../../utils/colors";
import { styles } from "./styles";

type ListCardType = {
  username: string;
  secondaryInfo: string;
  isChatCard: boolean;
  email: string;
  navigationToChatScreen: (email: string) => void;
};

const ListCard = ({
  username,
  email,
  secondaryInfo,
  isChatCard,
  navigationToChatScreen,
}: ListCardType) => {
  return (
    <TouchableOpacity style={styles.listCardContainer} onPress={() => navigationToChatScreen(email)}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userPic}
          source={{
            uri: "https://criadoresid.com/wp-content/uploads/2016/10/Captura-de-Tela-2020-03-16-a%CC%80s-13.59.50.png",
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.usernameText}>{username}</Text>
          <Text style={styles.secondaryInfoText}>{secondaryInfo}</Text>
        </View>
      </View>
      {isChatCard ? (
        <></>
      ) : (
        <Chats
          color={colors.primary}
          weight="fill"
          size={RFValue(32, 640)}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

export default ListCard;
