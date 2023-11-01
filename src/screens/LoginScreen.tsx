import { signInWithEmailAndPassword } from '@firebase/auth'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Button, Input, Text } from 'react-native-elements'

import { auth } from '../services/firebase'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>login screen</Text>
      <Input value={email} onChangeText={setEmail} />
      <Input secureTextEntry value={password} onChangeText={setPassword} />
      <Button onPress={handleSignIn} title="Sign in" />
    </SafeAreaView>
  )
}

export default LoginScreen
