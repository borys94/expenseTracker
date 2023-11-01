import { addDoc, collection } from 'firebase/firestore'

import { transactionConverter } from '../helpers/firestore'
import { firestore } from '../services/firebase'
import { Transaction } from '../types'

const transactionCollection = collection(firestore, 'transactions').withConverter(transactionConverter)

const useAddTransaction = () => {
  return async (transaction: Omit<Transaction, 'id'>) => {
    await addDoc(transactionCollection, transaction)
  }
}

export default useAddTransaction
