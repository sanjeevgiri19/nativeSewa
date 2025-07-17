import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'App/Screens/HomeScreen/HomeScreen';
import BusinessByCategory from 'App/Screens/BusinessByCategory/BusinessByCategory';
import BusinessDetails from 'App/Screens/BusinessDetails/BusinessDetails';

const Stack = createStackNavigator();

export default function HomeVavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessByCategory} />
      <Stack.Screen name='business-detail' component={BusinessDetails} />
    </Stack.Navigator>
  );
}
