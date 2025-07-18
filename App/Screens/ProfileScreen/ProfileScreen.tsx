import { useUser, useAuth } from '@clerk/clerk-expo';
import { tryCatch } from 'node_modules/graphql-request/build/lib/prelude';
import { View, Text, Image, FlatList, Linking, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  const onMessageBtnClick = () => {
    Linking.openURL(
      'mailto:' +
        'girisanjib191@gmail.com' +
        '?subject= I am looking for your service&body= hi there'
    );
  };
  return (
    <View className=" bg-purple-600 pb-6">
      <Text className="m-4 text-[20px] font-bold text-white">Profile</Text>
      <View className="flex items-center justify-center gap-1 pt-6">
        <Image source={{ uri: user?.imageUrl }} className="h-20 w-20 rounded-full" />
        <Text className="mt-2 text-[18px] font-bold text-white">{user?.fullName}</Text>
        <Text className="text-[14px] font-medium  text-gray-200">
          {user?.primaryEmailAddress?.emailAddress}
        </Text>
        <View className="mt-6 flex flex-row justify-between gap-16">
          <TouchableOpacity
            onPress={() => onMessageBtnClick()}
            className="rounded-lg bg-gray-100 px-6 py-2">
            <Text className="text-lg font-semibold text-purple-600">Message</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} className=" rounded-lg bg-gray-100 px-6 py-2">
            <Text className="text-lg font-semibold text-purple-600">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
