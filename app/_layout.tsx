import React from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack, router } from "expo-router";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";

import tamaguiConfig from "../tamagui.config";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
// root file  
const RootLayout = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    router.push("home");
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
        <ThemeProvider value={DefaultTheme}>
          <Stack>
            <Stack.Screen
              name="(TabContainer)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default RootLayout;
