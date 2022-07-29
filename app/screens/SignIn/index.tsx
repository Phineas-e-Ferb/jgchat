import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
import { DefaultScreen } from "../../components/DefaultScreen";
import SignInIllustration from "../../assets/SignInIllustration.svg";
import { styles } from "./styles";
import IconTextInput from "../../components/IconTextInput";
import { At, Keyhole } from "phosphor-react-native";
import DefaultButton from "../../components/DefaultButton";
import { colors } from "../../utils/colors";
import { signIn } from "../../firebase-config";
import { ReturnButton } from "../../components/ReturnButton";

export default function SignIn({navigation}: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    signIn(email, password);
  };

  return (
    <DefaultScreen>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.container}>
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
              <Keyhole color={colors.textLighter} />
            </IconTextInput>
          </View>
          <DefaultButton onPress={handleSignIn} text="Entrar" />
        </View>
      </KeyboardAvoidingView>
      <ReturnButton navigation={navigation} />
    </DefaultScreen>
  );
}
