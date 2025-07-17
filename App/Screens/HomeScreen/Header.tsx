import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import {FontAwesome} from "@expo/vector-icons"

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    user && (
      <View className="rounded-b-3xl bg-purple-600/80 p-3">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center">
            <Image source={{ uri: user?.imageUrl }} className="m-4 h-12 w-12 rounded-full" />
            <View className="flex">
              <Text className="text-gray-100 text-sm">Welcome,</Text>
              <Text className="text-gray-100 font-semibold">{user?.fullName}</Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={24} color={'white'} />
        </View>
        <View className="relative flex flex-row">
          <TextInput placeholder="Search" className="w-full rounded-xl bg-gray-200 px-4" />
          <FontAwesome
            name="search"
            size={22}
            color={'#7077A1'}
            className="absolute right-3 top-3 "
          />
        </View>
      </View>
    )
  );
};

export default Header;
