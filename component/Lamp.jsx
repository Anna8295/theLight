import React from "react";
import { StyleSheet, View, Animated } from "react-native";

const Lamp = ({ color, bulbOpacity }) =>{
  return (
    <View style={styles.lamp}>
      <View style={styles.cable}></View>
      <View style={styles.box}></View>
      <View style={styles.cover}></View>
      <View style={styles.inCover}>
        <Animated.View
          style={[styles.bulb, { backgroundColor: color, opacity: bulbOpacity }]}
        ></Animated.View>
      </View>
      <Animated.View
        style={[styles.light, { borderBottomColor: color, opacity: bulbOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5], // Adjust the opacity range as desired
          }),
        },]}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  lamp: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cable: {
    width: 4,
    height: 350,
    backgroundColor: "black",
  },
  box: {
    backgroundColor: "black",
    height: 45,
    width: 52,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  cover: {
    width: 200,
    height: 80,
    backgroundColor: "black",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: "relative",
    zIndex: 200,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden",
  },
  inCover: {
    width: "100%",
    maxWidth: 200,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#AAA",
    position: "absolute",
    bottom: -110,
    zIndex: 100,
  },
  bulb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    bottom: -25,
    left: "50%",
    marginLeft: -25,
  },
  light: {
    width: 150,
    borderBottomWidth: 350,
    borderLeftWidth: 25,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderRightWidth: 25,
    position: "absolute",
    top: 370,
    zIndex: 1,
  },
});

export default Lamp