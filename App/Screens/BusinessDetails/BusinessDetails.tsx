import { View, Text, Image, TouchableOpacity, ScrollView, Modal, Linking } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BookingModal from './BookingModal';

const BusinessDetails = () => {
  const param: any = useRoute().params;
  const [business, setBusiness] = useState<any>(param.business);
  const [showModal, setShowModal] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    // console.log('params', param?.business);
    param && setBusiness(param.business);
  }, [param]);

  const onMessageBtnClick = () => {
    Linking.openURL(
      'mailto:' + business?.email + '?subject= I am looking for your service&body= hi there'
    );
  };

  return (
    <View className="mx-4 flex-1 ">
      <ScrollView className="" showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()} className="my-2">
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>

        <Image source={{ uri: business?.images[0]?.url }} className="h-40 w-full rounded-lg" />

        <View className="mt-2">
          <Text className="text-[20px] font-bold">{business?.name}</Text>
          <View className="my-1 flex flex-row gap-4">
            <Text className="text-[16px] font-medium text-purple-600">
              {business?.contactPerson}
            </Text>
            {business?.category && (
              <Text className="self-center rounded-full bg-purple-200/90 px-3 py-1 text-[12px] text-purple-800">
                {business?.category?.name}
              </Text>
            )}
          </View>
          <Text className="text-[14px] font-medium text-gray-500">
            <Ionicons name="location-outline" size={16} color="black" /> {business?.address}
          </Text>
        </View>

        {/* Line */}
        <View className="mb-4 mt-6 border border-gray-300" />

        {/* About */}
        <View className="">
          <Text className="mb-1 text-[18px] font-bold">About Business</Text>
          <Text className="text-[14px] text-gray-700">{business?.about}</Text>
        </View>

        <View className="mb-4 mt-6 border border-gray-300" />

        {/* Gallery */}
        <View className="mb-6">
          <Text className="mb-3 text-[18px] font-bold">Gallery</Text>
          <View className="flex flex-row flex-wrap justify-between">
            {business?.images?.map((item: any, index: any) => (
              <Image
                key={index}
                source={{ uri: item.url }}
                className="mb-2 h-40 w-[48%] rounded-lg object-cover"
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View className="my-1 flex flex-row gap-2 bg-transparent">
        <TouchableOpacity
          onPress={() => onMessageBtnClick()}
          className="flex-1 rounded-full border border-purple-600 bg-white text-center font-semibold">
          <Text className="px-2 py-2 text-center font-semibold text-purple-700">Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          className="flex-1 rounded-full border border-purple-600 bg-purple-600 text-center font-semibold">
          <Text className="px-2 py-2 text-center font-semibold text-gray-100">Book Now</Text>
        </TouchableOpacity>
      </View>

      {/* Show model only when user click book now  */}
      <Modal animationType="slide" visible={showModal}>
        <BookingModal businessId={business?.id} hideModal={() => setShowModal(false)} />
      </Modal>
    </View>
  );
};

export default BusinessDetails;
