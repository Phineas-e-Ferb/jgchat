import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Logo from "../../assets/Logo.svg";
import HomeIllustration from "../../assets/HomeIllustration.svg";
import { DefaultScreen } from "../../components/DefaultScreen";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";

export default function Home({ navigation }: any) {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) navigation.navigate("UserChatList");
  }, [user]);
  
  return (
    <DefaultScreen>
      <Logo />
      <HomeIllustration />
      <View style={styles.textContainer}>
        <Text style={styles.homeTitle}>
          Conheça a nova experiência de conversar com seus amigos
        </Text>
        <Text style={styles.homeSubtitle}>
          Conecte com pessoas ao redor do mundo
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.signUpText}>Registre-se</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.signInText}
            onPress={() => navigation.navigate("SignIn")}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </DefaultScreen>
  );
}
