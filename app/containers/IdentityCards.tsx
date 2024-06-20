import React from "react";
import { FlatList } from "react-native";
import { Image, Stack, Text } from "tamagui";

import card from '../assets/icons/card.png'

const cards = [
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
  { title: "Identify Letter", desc: "Scientific Thinking" },
];
// Identify Cards component 
const IdentityCards = () => {
  return (
    <Stack marginHorizontal={16}>
      <FlatList
        data={cards}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Stack>
              <Image
                source={card}
                resizeMethod="resize"
                resizeMode="contain"
                marginRight={10}
                height={200}
                width={300}
              />
              <Text  color={"black"}>{item.title}</Text>
              <Text color={"#808080"}>{item.desc}</Text>
            </Stack>
          );
        }}
      />
    </Stack>
  );
};

export default IdentityCards;
