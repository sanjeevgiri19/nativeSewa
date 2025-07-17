import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BusinessListItem = ({ business }: any) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('business-detail', {
          business: business,
        })
      }
      className="my-2 flex flex-row gap-2 rounded-xl bg-white p-2">
      <Image source={{ uri: business?.images[0].url }} className="h-16 w-16 rounded-xl" />{' '}
      <View className="">
        <Text className="text-[12px] font-medium text-gray-800">{business?.contactPerson}</Text>
        <Text className="text-[14px] font-semibold ">{business?.name}</Text>
        <Text className="text-[11px] text-gray-600 ">
          <Ionicons name="location-outline" size={16} color="black" />
          {business?.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;
