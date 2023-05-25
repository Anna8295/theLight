import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Animated, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import Slider from "@react-native-community/slider";
import Lamp from "../component/Lamp";
import ColorButtons from '../component/ColorButtons'


const BulbScreen = () => {
  const [color, setColor] = useState("white");
  const [intensity, setIntensity] = useState({
    "#ef476f": 50,
    "#ffd166": 50,
    white: 50,
    "#06d6a0": 50,
    "#118ab2": 50,
  });
  const bulbOpacity = new Animated.Value(intensity[color] / 100);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleIntensityChange = (value) => {
    setIntensity((prevIntensity) => ({ ...prevIntensity, [color]: value }));
  };

  useEffect(() => {
    Animated.timing(bulbOpacity, {
      toValue: intensity[color] / 100,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, [color, intensity]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.lampContainer}>
        <Lamp color={color} bulbOpacity={bulbOpacity} />
      </View>  

      <View style={styles.ButtonsContainer}>
        <View style={styles.colorButtonsContainer}>
          <ColorButtons
            color="#ef476f"
            shadowColor1="#7a2439"
            shadowColor2="#ff6aa5"
            onPress={handleColorChange}
          />
          <ColorButtons
            color="#ffd166"
            shadowColor1="#826b34"
            shadowColor2="#ffff98"
            onPress={handleColorChange}
          />
          <ColorButtons
            color="white"
            shadowColor1="#828282"
            shadowColor2="#ffffff"
            onPress={handleColorChange}
          />
          <ColorButtons
            color="#06d6a0"
            shadowColor1="#036d52"
            shadowColor2="#09ffee"
            onPress={handleColorChange}
          />
          <ColorButtons
            color="#118ab2"
            shadowColor1="#09465b"
            shadowColor2="#19ceff"
            onPress={handleColorChange}
          />
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <TouchableWithoutFeedback style={styles.sliderContainerShadow}>
            <Slider
            value={intensity[color]}
            minimumValue={0}
            maximumValue={100}
            onValueChange={handleIntensityChange}
            style={styles.slider}
            minimumTrackTintColor={color}
            maximumTrackTintColor="white"
            thumbTintColor={color}
            />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#073b4c",
    paddingTop: Constants.statusBarHeight,
  },
  lampContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  ButtonsContainer: {
    flex: 2,
    alignItems: "flex-end",
    paddingHorizontal: 25,
    marginBottom: 420,
    shadowColor: "#0b5e7a",
    shadowOffset: { width: 10, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  colorButtonsContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "#073b4c",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#03181e",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#073b4c",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    shadowColor: "#03181e",
    shadowOffset: { width: -10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 10,
  },
  sliderContainerShadow: {
    shadowColor: "#0b5e7a",
    shadowOffset: { width: 10, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  slider: {
    width: "100%",
  },
});

export default BulbScreen


