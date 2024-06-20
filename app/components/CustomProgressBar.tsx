import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "tamagui";
// CustomProgressBar component
const CustomProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <Stack backgroundColor={"#CEE7FE"} borderRadius={50}>
      {/* LinearGradient use for add muliple color  */}
      <LinearGradient
        colors={["#E6EDFE", "#3E63DD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: `${percentage}%`,
          height: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
      />
    </Stack>
  );
};

export default CustomProgressBar;
