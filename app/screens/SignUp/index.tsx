import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import SignUpIllustration from "../../assets/SignUpIllustration.svg"
import IconTextInput from '../../components/IconTextInput'
import { At, Keyhole, UserCircle } from 'phosphor-react-native'
import { styles } from './styles'
import DefaultButton from '../../components/DefaultButton'
import { colors } from '../../utils/colors'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior='position' style={styles.keyboardContainer}>
        <View style={styles.container}>
          <SignUpIllustration />
          <Text style={styles.title}>Cadastre-se</Text>
          <IconTextInput value={name} setValue={setName} placeholder="Insira seu nome">
            <UserCircle color={colors.textLighter}/>
          </IconTextInput>
          <IconTextInput value={email} setValue={setEmail} placeholder="Insira seu e-mail">
            <At color={colors.textLighter}/>
          </IconTextInput>
          <IconTextInput value={password} setValue={setPassword} placeholder="Insira sua senha" obscureText>
            <Keyhole color={colors.textLighter}/>
          </IconTextInput>
          <DefaultButton text='Registrar' onPress={() => { }} />
        </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp