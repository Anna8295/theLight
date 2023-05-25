import React from "react";
import { TouchableOpacity, View } from "react-native";

const ColorButton = ({ color, shadowColor1, shadowColor2, onPress }) => {
  return (
    <View style={[styles.ShadowColorButton, { shadowColor: shadowColor2 }]}>
      <View style={[styles.ShadowColorButton1, { shadowColor: shadowColor1 }]}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: color }]}
          onPress={() => onPress(color)}
        />
      </View>
    </View>
  );
};

const styles = {
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 15,
  },
  ShadowColorButton: {
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
  ShadowColorButton1: {
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
};

export default ColorButton;