import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Animated, Easing, StyleSheet } from 'react-native';

const HomePage = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Animation value for text opacity

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

  // Start animations on component mount
  useEffect(() => {
    fadeIn(); // Initial start of fadeIn
  }, []);

  // Animated style
  const textOpacity = {
    opacity: fadeAnim,
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
