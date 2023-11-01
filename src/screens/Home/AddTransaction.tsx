import { useState } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Input, Button } from 'react-native-elements'

import CategoryDropdown from '../../components/CategoryDropdown'
import DateInput from '../../components/DateInput'
import useAddTransaction from '../../hooks/useAddTransaction'
import { auth } from '../../services/firebase'
import { Transaction } from '../../types'

const AddTransactionScreen = () => {
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState(new Date())
  const [category, setCategory] = useState<Transaction['category']>()
  const selected = category ? `${category?.categoryName}/${category?.subCategoryName}` : undefined

  const onSelect = (value: string) => {
    const [categoryName, subCategoryName] = value.split('/')
    setCategory({
      categoryName,
      subCategoryName,
    })
  }

  const addTransaction = useAddTransaction()

  const onSave = async () => {
    if (!category) {
      return
    }
    try {
      await addTransaction({
        category,
        value: +value * 100,
        description,
        userId: auth.currentUser!.uid!,
        date,
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="value, eg. 10.99" label="Value" value={value} onChangeText={setValue} />
        <CategoryDropdown selected={selected} onSelect={onSelect} />
        <DateInput date={date} setDate={setDate} />
        <Input
          placeholder="short description"
          label="Short description"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Save" onPress={onSave} />
      </View>
    </SafeAreaView>
  )
}

export default AddTransactionScreen
