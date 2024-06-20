import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import type {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { BottomTabDescriptorMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";

import HomeIcon from "../assets/icons/home.png";
import ExploreIcon from "../assets/icons/explore.png";

import LearnIcon from "../assets/icons/learn.png";
import ParentIcon from "../assets/icons/parent.png";
// Tab file
const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}) => {
  return (
   
<View style={{backgroundColor:"#E1F0FF",height:75,borderTopLeftRadius:24,borderTopRightRadius:24}}>
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconSource;
        if (route.name === "home") {
          iconSource = HomeIcon;
        } else if (route.name === "explore") {
          iconSource = ExploreIcon;
        } else if (route.name === "learn") {
          iconSource = LearnIcon;
        } else if (route.name === "parent") {
          iconSource = ParentIcon;
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[styles.tabBarItem]}
          >
            <Image
              source={iconSource}
              style={{
                ...styles.tabBarIcon,
                tintColor: isFocused ? "#E54D2E" : "#A0A0A0",
              }}
            />
            <Text style={{ color: isFocused ? "#E54D2E" : "#A0A0A0",bottom:2 ,fontWeight:'bold'}}>
              {label}
            </Text>
            {
              isFocused &&
              <View style={styles.line} />
            }
           
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs  tabBar={(props) => <CustomTabBar {...props} />}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          title: "Home",
          headerShown: false,
          
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explore",
          title: "Explore",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          headerTitle: "Learn",
          title: "Learn",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="parent"
        options={{
          headerTitle: "Parent",
          title: "Parent",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#fff",
    elevation: 40,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    borderTopColor: '#0000FF', 
    marginTop:6
  },
  tabBarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    width: 25,
    height: 25,
    marginTop: 4,
  },
  line: {
    backgroundColor: 'red',
    height: 4,
    width: '60%', // Use percentage width for responsiveness
    alignSelf: 'center', // Center horizontally
    position: 'absolute', // Position absolutely if needed
    top: 50, // Adjust top position as needed
  },
});

export default TabsLayout;
