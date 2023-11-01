import { DrawerContentComponentProps, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { Icon, ListItem } from 'react-native-elements'

import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import { auth } from './services/firebase'

const Drawer = createDrawerNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerPosition: 'right',
          headerLeft: () => null,
          headerRight: () => <DrawerToggleButton />,
        }}
      >
        <Drawer.Screen name="Loading" component={LoadingScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="SignUp" component={SignUpScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

function CustomDrawerContent({ navigation }: DrawerContentComponentProps) {
  const handleSignOut = async () => {
    await auth.signOut()
  }

  const list = [
    {
      title: 'Home',
      icon: 'home',
      onPress: () => navigation.navigate('Home'),
    },
    {
      title: 'About',
      icon: 'help',
      onPress: () => navigation.navigate('About'),
    },
    auth.currentUser
      ? {
          title: 'Logout',
          icon: 'logout',
          onPress: handleSignOut,
        }
      : {
          title: 'Login',
          icon: 'login',
          onPress: () => navigation.navigate('Login'),
        },
  ]

  return (
    <View>
      {list.map((item, i) => (
        <ListItem onPress={item.onPress} key={i} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  )
}
