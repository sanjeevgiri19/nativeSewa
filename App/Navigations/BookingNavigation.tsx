import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from 'App/Screens/BookingScreen/BookingScreen';
import BusinessDetails from 'App/Screens/BusinessDetails/BusinessDetails';

const Stack = createStackNavigator();

const BookingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="booking" component={BookingScreen} />
      <Stack.Screen name="business-detail" component={BusinessDetails} />
    </Stack.Navigator>
  );
};

export default BookingNavigation;
