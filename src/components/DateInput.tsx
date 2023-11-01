import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import { formatDate } from '../helpers/date'

type Props = {
  title?: string
  date: Date
  setDate: (date: Date) => void
}

export const DateInput = ({ title, date, setDate }: Props) => {
  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (e, date) => {
        date && setDate(date)
      },
      onError: (e) => console.log('error', e),
      mode: 'date',
      is24Hour: true,
    })
  }

  return (
    <Pressable onPress={openDatePicker}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{formatDate(date)}</Text>
        <Text style={styles.changeDateText}>CHANGE</Text>
      </View>
    </Pressable>
  )
}

export default DateInput

const styles = StyleSheet.create({
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingVertical: 15,
    marginHorizontal: 10,
    marginVertical: 15,
  },
  dateText: {
    fontWeight: 'bold',
  },
  changeDateText: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: '#00B6E6',
  },
})
