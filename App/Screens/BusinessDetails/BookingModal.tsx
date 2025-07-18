import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import GlobalApi from 'App/Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';

const BookingModal = ({ businessId, hideModal }: any) => {
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState<any>(null);
  // const [note, setNote] = useState();
  const [timeList, setTimeList] = useState<any>();
  const [selectedTime, setSelectedTime] = useState<any>();

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList: any = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({ time: i + ':00 AM' });
      timeList.push({ time: i + ':30 AM' });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({ time: i + ':00 PM' });
      timeList.push({ time: i + ':30 PM' });
    }
    setTimeList(timeList);
  };

  const createNewBooking = () => {
    if (!selectedDate || !selectedTime) {
      ToastAndroid.show('Please select date and time', ToastAndroid.LONG);
      return;
    }

    const date = new Date(selectedDate);
    const [timeString, period] = selectedTime.split(' ');
    let [hour, minute] = timeString.split(':').map(Number);

    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(0);

    const isoDateTime = date.toISOString();

    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      date: isoDateTime,
      businessId,
    };

    GlobalApi.createNewBooking(data?.businessId, data?.date, data?.userEmail, data?.userName).then(
      (resp) => {
        console.log('Booking Response:', resp);
        ToastAndroid.show('Booking Created Successfully', ToastAndroid.LONG);
        hideModal();
      }
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView className="p-4">
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
            width={340}
            minDate={Date.now()}
            todayBackgroundColor="black"
            todayTextStyle={{ color: 'white' }}
            selectedDayColor="purple"
            selectedDayTextColor="white"
          />
        </View>

        <View className="mt-4">
          <Text className="mx-1 mb-2 text-[18px] font-semibold">Select Time Slot</Text>
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setSelectedTime(item.time)}>
                <Text
                  className={`m-1 mr-2 rounded-full border border-gray-400 px-5 py-3 ${
                    selectedTime === item.time
                      ? 'bg-purple-600 text-white'
                      : 'bg-transparent text-purple-700'
                  }`}>
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Note section  */}
        <View className="mt-4">
          <Text className="mx-1 mb-2 text-[18px] font-semibold">Any Suggestions</Text>
          <TextInput
            placeholder="Note"
            numberOfLines={4}
            multiline={true}
            className="items-start rounded-xl border border-gray-400 px-2 py-3"
            // onChange={(text) => setNote(text)}
          />
        </View>

        <TouchableOpacity onPress={() => createNewBooking()} className="mt-4">
          <Text className="rounded-full bg-purple-600 py-3 text-center text-[16px] text-white">
            Confirm Booking
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default BookingModal;
