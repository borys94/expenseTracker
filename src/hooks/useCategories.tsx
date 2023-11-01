import { collection, QueryDocumentSnapshot, SnapshotOptions, FirestoreDataConverter } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'

import { queryToData } from '../helpers/firestore'
import { firestore } from '../services/firebase'
import { Category } from '../types'

const transactionConverter: FirestoreDataConverter<Category> = {
  toFirestore({ id, ...category }: Category): Category {
    return category
  },
  fromFirestore(snapshot: QueryDocumentSnapshot<Category>, options: SnapshotOptions): Category {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id,
      // value: data.value / 100
    }
  },
}

const categoryCollection = collection(firestore, 'categories').withConverter(transactionConverter)

export const useCategories = () => {
  const [value, loading, error] = useCollection(categoryCollection)

  return [queryToData(value), loading, error] as const
}
