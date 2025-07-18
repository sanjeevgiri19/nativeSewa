import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalApi from 'App/Utils/GlobalApi';
import { useNavigation } from '@react-navigation/native';

const BusinessList = () => {
  const navigation:any = useNavigation()
  const [businessLists, setBusinessLists] = useState<any>([]);
  useEffect(() => {
    getBusinessList();
  }, []);
  const getBusinessList = () => {
    GlobalApi.getBusinessList().then((resp: any) => {
      // console.log('resps', resp.businessLists);
      setBusinessLists(resp?.businessLists);
    });
  };

  return (
    <View className=" mt-6">
      <View className="mb-2 flex flex-row justify-between">
        <Text className="text-lg font-semibold">Latest Business</Text>
        <Text className="mt-2 pr-2 text-[12px] font-medium">View All</Text>
      </View>
      <FlatList
        data={businessLists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.push('business-detail', {
            business:item
          })} className="mr-4  rounded-xl bg-white p-2">
            <View className="flex flex-row justify-center">
              <Image
                source={{ uri: item?.images[0]?.url }}
                className="h-24 w-40 rounded-xl object-cover"
              />
            </View>

            <View className="flex-1 gap-1">
              <Text className="text-[15px] font-semibold">{item?.name}</Text>
              <Text className="text-[13px] font-medium text-purple-600">{item?.contactPerson}</Text>
              <Text className="self-start rounded-full bg-purple-200 px-2 py-1 text-[11px] text-purple-700 ">
                {item?.category?.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BusinessList;
