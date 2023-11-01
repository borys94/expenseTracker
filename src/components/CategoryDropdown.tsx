import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import { Text } from 'react-native-elements'

import { useCategories } from '../hooks/useCategories'

type Props = {
  selected?: string
  onSelect: (value: string) => void
}

const CategoryDropdown = ({ selected, onSelect }: Props) => {
  const [categories] = useCategories()
  const formated = categories?.map((c) => c.subCategories.map((s) => ({ name: `${c.name}/${s}` })).flat()).flat()

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={formated ?? []}
      renderItem={(item) => <Item item={item} />}
      search
      maxHeight={300}
      labelField="name"
      valueField="name"
      placeholder="Choose category"
      searchPlaceholder="Search..."
      value={selected}
      onChange={(item) => {
        onSelect(item.name)
      }}
    />
  )
}

export default CategoryDropdown

type ItemProps = {
  item: {
    name: string
  }
}
const Item = (props: ItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{props.item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
  },
  dropdown: {
    margin: 10,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
})
