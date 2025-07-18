import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BusinessListItem = ({ business, booking }: any) => {
  const navigation = useNavigation<any>();
  return (
    business && (
      <TouchableOpacity
        onPress={() =>
          navigation.push('business-detail', {
            business: business,
          })
        }
        className="my-2 flex flex-row gap-2 rounded-xl bg-white p-2">
        <Image source={{ uri: business?.images[0].url }} className="h-24 w-20 rounded-xl" />{' '}
        <View className="flex flex-col justify-center gap-0.5">
          <Text className="text-[12px] font-medium text-gray-800">{business?.contactPerson}</Text>
          <Text className="text-[14px] font-semibold ">{business?.name}</Text>
          {booking?.bookingStatus && (
            <Text
              className={`self-start rounded-full bg-purple-200 px-2 py-1 text-[11px] text-purple-700 ${booking?.bookingStatus === 'booked' ? 'bg-purple-200 text-purple-700' : booking.bookingStatus == 'completed' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
              {booking.bookingStatus}
            </Text>
          )}
          <Text className="text-[12px] text-gray-600 ">
            <Ionicons name="location-outline" size={16} color="black" />
            {business?.address}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );
};

export default BusinessListItem;
