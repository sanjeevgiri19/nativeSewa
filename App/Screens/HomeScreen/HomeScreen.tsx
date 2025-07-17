import { ScrollView, View } from 'react-native';
import Header from './Header';
import Slider from './Slider';
import Category from './Category';
import BusinessList from './BusinessList';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <View className="px-3 py-2">
        <Slider />
        <Category />
        <BusinessList />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
