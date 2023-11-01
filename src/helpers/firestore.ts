import {
  DocumentData,
  FirestoreDataConverter,
  QuerySnapshot,
  Timestamp,
  SnapshotOptions,
  QueryDocumentSnapshot,
} from '@firebase/firestore'

import { DbTransaction, Transaction } from '../types'

export const queryToData = <T extends DocumentData>(value?: QuerySnapshot<T>) => {
  return value?.docs.map((doc) => doc.data())
}

export const transactionConverter: FirestoreDataConverter<Transaction, DbTransaction> = {
  toFirestore(transaction: Transaction): DbTransaction {
    return {
      ...transaction,
      date: Timestamp.fromDate(transaction.date),
    }
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<Transaction, DbTransaction>, options: SnapshotOptions): Transaction {
    const data = snapshot.data(options) as any as DbTransaction
    return {
      ...data,
      id: snapshot.id,
      date: data.date.toDate(),
    }
  },
}
