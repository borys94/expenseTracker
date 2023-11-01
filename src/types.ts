import { Timestamp } from '@firebase/firestore'

export type Category = {
  id?: string
  userId: string
  name: string
  subCategories: string[]
}

export type Transaction = {
  id?: string
  userId: string
  value: number
  date: Date
  description: string
  category: {
    categoryName: string
    subCategoryName: string
  }
}

export type DbTransaction = {
  id?: string
  userId: string
  value: number
  date: Timestamp
  description: string
  category: {
    categoryName: string
    subCategoryName: string
  }
}
