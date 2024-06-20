import React from "react";
import { FlatList } from "react-native";
import { Image, Stack, Text } from "tamagui";
import explorecard from '../assets/icons/explore-card.png';
import RightArrow from '../assets/icons/right-arrow.png'


// cards list akash
const exploreCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

const ExploreList = () => {
  return (
    <Stack marginTop={6} marginHorizontal={16}>
      <Stack flexDirection="row" paddingVertical={4} paddingHorizontal={10}>
        <Text flex={1} color={"#3E63DD"} fontWeight={"bold"} fontSize={24} marginLeft={-8} >
          Explore
        </Text>
        <Image
          source={RightArrow}
          resizeMethod="resize"
          resizeMode="contain"
          marginRight={-4}
          height={20}
          width={20}
         
        />
      </Stack>

      <FlatList
        data={exploreCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={() => {
          return (
            <Stack>
              <Image
                source={explorecard}
                resizeMethod="resize"
                resizeMode="contain"
                marginRight={10}
                height={200}
                width={160}
              />
            </Stack>
          );
        }}
      />
    </Stack>
  );
};

export default ExploreList;
