import { View, Text, FlatList, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import GlobalApi from 'App/Utils/GlobalApi';

const Slider = () => {
  const [slider, setSlider] = useState<any[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    getSliders();
  }, []);

  useEffect(() => {
    if (slider.length === 0) return;

    const interval = setInterval(() => {
      currentIndex.current =
        currentIndex.current === slider.length - 1 ? 0 : currentIndex.current + 1;

      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [slider]);

  const getSliders = () => {
    GlobalApi.getSlider().then((resp: any) => {
      setSlider(resp?.sliders || []);
    });
  };

  return (
    <View>
      <Text className="my-4 text-lg font-semibold">Offers For You</Text>
      <FlatList
        ref={flatListRef}
        data={slider}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mr-6">
            <Image
              source={{ uri: item?.image?.url }}
              alt="image"
              className="h-44 w-80 rounded-xl object-cover"
            />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;
