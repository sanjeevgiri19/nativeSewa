import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
// import PageHeading from 'App/Components/PageHeading';
import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import * as CalendarPickerModule from 'react-native-calendar-picker';
const CalendarPicker = CalendarPickerModule?.default || CalendarPickerModule;

const BookingModal = ({ hideModal }: any) => {
  // const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  console.log('CalendarPicker', CalendarPicker); // should not be undefined
  const [timeList, setTimeList] = useState<any>();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList: any = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      });
      timeList.push({
        time: i + ':30AM',
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ':00 PM',
      });
      timeList.push({
        time: i + ':30 PM',
      });
    }
    setTimeList(timeList);
  };

  return (
    <View className="p-4">
      {/* <PageHeading title={'Booking'} /> */}
      <TouchableOpacity
        onPress={() => hideModal()}
        className="mb-2 flex flex-row items-center gap-2">
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text className="mb-1 text-[16px] font-semibold">Business</Text>
      </TouchableOpacity>
      <Text className="mx-1 mb-2 text-[18px] font-semibold">Select Date</Text>
      <View className="rounded-xl bg-purple-200 p-4">
        <CalendarPicker
          onDateChange={setSelectedDate}
          width={370}
          minDate={Date.now()}
          todayBackgroundColor="black"
          todayTextStyle={{ color: 'white' }}
          selectedDayColor="purple"
          selectedDayTextColor="white"
        />
      </View>

      {/* time select selection */}
    </View>
  );
};

export default BookingModal;
