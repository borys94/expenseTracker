import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AddTransactionScreen from './Home/AddTransaction'
import HistoryScreen from './Home/HistoryScreen'
import OverviewScreen from './Home/OverviewScreen'

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Add Transaction" component={AddTransactionScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  )
}

export default HomeScreen
