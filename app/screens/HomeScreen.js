import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR, FONTS, FONTSIZE } from "../constants";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontFamily: "Inter-Bold", fontSize: FONTSIZE.dp_30 }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
