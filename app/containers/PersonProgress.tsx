import React from "react";
import { Image, Stack, Text } from "tamagui";
import CustomProgressBar from "../components/CustomProgressBar";
import Person from '../assets/icons/person-avatar.png';
import  FILLEDLEFTARROW from '../assets/icons/filled-right-arrow.png'
// PersonProgress component 
const PersonProgress = () => {
  return (
    <Stack
      backgroundColor={"white"}
      borderWidth={1}
      borderColor={"#E2E2E2"}
      marginHorizontal={16}
      marginVertical={20}
      borderRadius={30}
      flexDirection="row"
      alignItems="center"
      paddingVertical={16}
      paddingHorizontal={20}
    >
      <Image
        source={Person}
        style={{ height: 60, width: 60 }}
        resizeMethod="resize"
        resizeMode="contain"
      />

      <Stack flex={1} paddingHorizontal={20}>
        <CustomProgressBar percentage={40} />

        <Text fontWeight={"bold"} fontSize={16} color={"#3E63DD"} marginTop={6}>
          Do Today 30%
        </Text>
      </Stack>

      <Image
        source={FILLEDLEFTARROW}
        style={{ height: 50, width: 50 }}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </Stack>
  );
};

export default PersonProgress;
