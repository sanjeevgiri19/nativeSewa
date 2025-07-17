import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalApi from 'App/Utils/GlobalApi';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const [categoryList, setCategoryList] = useState();
  const navigation = useNavigation<any>();
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    GlobalApi.getCategory().then((resp: any) => {
      // console.log('respssss', resp?.categories);

      setCategoryList(resp?.categories);
    });
  };

  return (
    <View className="mt-3 ">
      <View className="flex flex-row justify-between">
        <Text className="text-lg font-semibold">Category</Text>
        <Text className="mt-2 pr-2 text-[12px] font-medium">View All</Text>
      </View>
      <FlatList
        data={categoryList}
        horizontal={true}
        // numColumns={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push('business-list', {
                Category: item.name,
              })
            }
            className="mt-3">
            <View className="mx-4 flex flex-row justify-center rounded-full bg-gray-200 p-3">
              <Image source={{ uri: item?.icon?.url }} alt="image" className="h-10 w-10 " />
            </View>
            <Text className="text-md mx-6 mt-1 font-medium">{item?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;
