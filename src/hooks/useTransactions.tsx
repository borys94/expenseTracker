import { collection, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

import { queryToData, transactionConverter } from '../helpers/firestore'
import { firestore } from '../services/firebase'

const transactionCollection = collection(firestore, 'transactions').withConverter(transactionConverter)

export const useTransactions = () => {
  const [value, loading, error] = useCollection(query(transactionCollection, orderBy('date', 'desc')))

  return [queryToData(value), loading, error] as const
}
