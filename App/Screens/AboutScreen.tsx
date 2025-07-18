import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = () => {
  return (
    // <SafeAreaView className=" mt-4 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Banner Section */}
        <View className="relative">
          {/* <Image
            source={require('../../../assets/saarathi2.png')}
            className="h-36 w-full"
            resizeMode="contain"
          /> */}
          <View className="absolute inset-0 items-center justify-center bg-purple-900/70">
            <Text className="text-2xl font-bold tracking-wide text-white">
              Your Everyday Partner
            </Text>
          </View>
        </View>

        {/* Intro */}
        <View className="px-6 py-4">
          <Text className="mb-2 text-center text-xl font-bold text-purple-700">
            Welcome to SaarathiSewa
          </Text>
          <Text className="text-center text-base leading-relaxed text-gray-700">
            From fixing a leaky tap to transforming your space, we connect you to skilled
            professionals across Nepal. We don’t just provide services— we deliver trust, care, and
            convenience, one doorstep at a time.
          </Text>
        </View>

        {/* Card: Our Mission */}
        <View className="mx-6 my-4 rounded-2xl bg-purple-100 p-4 shadow-md">
          <Text className="mb-1 text-lg font-semibold text-purple-800">🌟 Our Mission</Text>
          <Text className="text-gray-700">
            To make essential services accessible, transparent, and dependable for every household
            in Nepal.
          </Text>
        </View>

        {/* Card: Our Vision */}
        <View className="mx-6 my-2 rounded-2xl bg-purple-50 p-4 shadow-sm">
          <Text className="mb-1 text-lg font-semibold text-purple-800">🔭 Our Vision</Text>
          <Text className="text-gray-700">
            To empower local workers and elevate Nepal’s service ecosystem with innovation and
            integrity.
          </Text>
        </View>

        {/* Card: What We Value */}
        <View className="mx-6 mt-2 rounded-2xl border border-purple-200 bg-white p-4 shadow-sm">
          <Text className="mb-1 text-lg font-semibold text-purple-800">💜 What We Value</Text>
          <Text className="text-gray-700">
            - Trust & Reliability {'\n'}- Fast & Friendly Service {'\n'}- Empowering Local Talent{' '}
            {'\n'}- Customer-first Mindset
          </Text>
        </View>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default AboutScreen;
