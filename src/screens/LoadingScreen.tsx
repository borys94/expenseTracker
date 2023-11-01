import { useNavigation } from '@react-navigation/core'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'

import { auth } from '../services/firebase'

const LoadingScreen = () => {
  const navigation = useNavigation<any>()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate('Login')
      } else {
        navigation.navigate('Home')
      }
    })
  }, [])

  return (
    <SafeAreaView>
      <Text>loading screen</Text>
    </SafeAreaView>
  )
}

export default LoadingScreen
