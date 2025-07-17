import { View, Text, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react';
import GlobalApi from 'App/Utils/GlobalApi';

const Slider = () => {
  const [slider, setSlider] = useState<any>([]);

  useEffect(() => {
    getSliders();
  }, []);
  const getSliders = () => {
    GlobalApi.getSlider().then((resp: any) => {
      // console.log('resp', resp.sliders);
      setSlider(resp?.sliders);
    });
  };

  return (
    <View>
      <Text className="my-2 text-lg font-semibold">Offers For You</Text>
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View className="mr-6">
            <Image
              source={{ uri: item?.image?.url }}
              alt="image"
              className="h-24 w-48 rounded-xl object-cover"
            />
            {/* <Text>hii</Text> */}
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
