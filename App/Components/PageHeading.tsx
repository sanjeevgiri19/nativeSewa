import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PageHeading = ({ title }: any) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="flex flex-row items-center gap-2">
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text className="mb-1 text-[15px] font-semibold">{title}</Text>
      </TouchableOpacity>{' '}
    </View>
  );
};

export default PageHeading;
