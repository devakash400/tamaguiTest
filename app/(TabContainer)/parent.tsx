import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Animated, Easing, StyleSheet } from 'react-native';

const HomePage = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation value for text opacity
  const [slideAnim] = useState(new Animated.Value(-100)); // Animation value for text translation

  // Animation configuration
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => fadeOut()); // Start fadeOut after fadeIn completes
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => fadeIn()); // Start fadeIn after fadeOut completes
  };

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => slideOut()); // Start slideOut after slideIn completes
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => slideIn()); // Start slideIn after slideOut completes
  };

  // Start animations on component mount
  useEffect(() => {
    fadeIn(); // Initial start of fadeIn
    slideIn(); // Initial start of slideIn
  }, []);

  // Animated styles
  const textOpacity = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: slideAnim,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, textOpacity]}>Coming Soon</Animated.Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomePage;
