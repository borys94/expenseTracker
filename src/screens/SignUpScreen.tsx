import { createUserWithEmailAndPassword } from '@firebase/auth'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import { auth } from '../services/firebase'

const SignUpScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>signup screen</Text>
      <Input value={email} onChangeText={setEmail} />
      <Input secureTextEntry value={password} onChangeText={setPassword} />
      <Button onPress={handleSignUp} title="Sign up" />
    </SafeAreaView>
  )
}

export default SignUpScreen
