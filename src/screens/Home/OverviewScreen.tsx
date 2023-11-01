import { SafeAreaView } from 'react-native'
import { Button, ListItem, Text } from 'react-native-elements'

import { formatDate } from '../../helpers/date'
import { formatPrice } from '../../helpers/price'
import useRecentTransactions from '../../hooks/useRecentTransactions'

const OverviewScreen = () => {
  const [transactions] = useRecentTransactions()

  return (
    <SafeAreaView>
      <Text h4>Recent transactions</Text>
      {transactions?.map((transaction, i) => (
        <ListItem.Swipeable
          key={i}
          bottomDivider
          leftContent={
            <Button title="Info" icon={{ name: 'info', color: 'white' }} buttonStyle={{ minHeight: '100%' }} />
          }
          rightContent={
            <Button
              title="Delete"
              icon={{ name: 'delete', color: 'white' }}
              buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
            />
          }
        >
          <ListItem.Content>
            <ListItem.Title>{transaction.category.categoryName}</ListItem.Title>
            {transaction.description && <ListItem.Subtitle>{transaction.description}</ListItem.Subtitle>}
          </ListItem.Content>
          <Text>{formatDate(transaction.date)}</Text>
          <Text>{formatPrice(transaction.value)}</Text>
        </ListItem.Swipeable>
      ))}
    </SafeAreaView>
  )
}

export default OverviewScreen
