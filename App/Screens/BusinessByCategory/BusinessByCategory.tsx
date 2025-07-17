import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from 'App/Utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import PageHeading from 'App/Components/PageHeading';

const BusinessByCategory = () => {
  const param: any = useRoute();
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState<any>(null);
  // console.log('pramas', param.params.Category);

  useEffect(() => {
    getBusinessByCategory();
    // console.log('Category', param.params.Category);
    // console.log('businessList', businessList);
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessByCategory(param.params.Category).then((resp: any) => {
      // console.log('resr', resp.businessLists);
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <View className="">
      <View className="ml-2 mt-2 ">
        <PageHeading title={param?.params?.Category} />

        {businessList?.length > 0 ? (
          <FlatList
            data={businessList}
            className="mt-6"
            renderItem={({ item, index }) => <BusinessListItem business={item} />}
          />
        ) : (
          <Text className=" flex items-center justify-center text-center text-[24px] font-medium">
            No Business Found
          </Text>
        )}
      </View>
    </View>
  );
};

export default BusinessByCategory;
