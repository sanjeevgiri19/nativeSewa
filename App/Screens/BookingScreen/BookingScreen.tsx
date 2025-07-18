import { useUser } from '@clerk/clerk-expo';
import GlobalApi from 'App/Utils/GlobalApi';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import BusinessListItem from '../BusinessByCategory/BusinessListItem';

const BookingScreen = () => {
  const { user } = useUser();
  const [bookingList, setbookingList] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && getUserBookings();
  }, [user]);
  const getUserBookings = () => {
    setLoading(true);
    GlobalApi.getUserBooking(user?.primaryEmailAddress?.emailAddress).then((resp: any) => {
      console.log('resp', resp);
      setbookingList(resp?.bookings);
      setLoading(false);
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} className="">
      <Text className="m-4 text-[16px] font-semibold">My Bookings</Text>
      <View className="">
        <FlatList
          data={bookingList}
          onRefresh={() => getUserBookings()}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} booking={item} />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default BookingScreen;
