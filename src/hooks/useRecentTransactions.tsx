import { collection, query, limit, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

import { queryToData, transactionConverter } from '../helpers/firestore'
import { firestore } from '../services/firebase'

const transactionCollection = collection(firestore, 'transactions').withConverter(transactionConverter)

const useRecentTransactions = () => {
  const [value, loading, error] = useCollection(query(transactionCollection, orderBy('date', 'desc'), limit(5)))

  return [queryToData(value), loading, error] as const
}
export default useRecentTransactions
