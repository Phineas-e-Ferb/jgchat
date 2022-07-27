import React, { useState } from "react";
import { Text, View } from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import SignInIllustration from "../../assets/SignInIllustration.svg";
import { styles } from "./styles";
import IconTextInput from "../../components/IconTextInput";
import { At, Keyhole } from "phosphor-react-native";
import DefaultButton from "../../components/DefaultButton";
import { colors } from "../../utils/colors";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <DefaultScreen>
      <View style={styles.illustration}>
        <SignInIllustration />
      </View>
      <Text style={styles.title}>Acessar conta</Text>
      <View>
        <IconTextInput
          value={email}
          setValue={setEmail}
          placeholder="Insira seu email"
        >
          <At color={colors.textLighter} />
        </IconTextInput>
        <IconTextInput
          value={password}
          setValue={setPassword}
          placeholder="Insira sua senha"
          obscureText
        >
          <Keyhole color={colors.textLighter}/>
        </IconTextInput>
      </View>
      <DefaultButton onPress={() => {}} text="Entrar" />
    </DefaultScreen>
  );
}