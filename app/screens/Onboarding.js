import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { COLOR } from "../constants";

const Onboarding = (props) => {
  const { navigation, route } = props;

  const [isLoading, setIsLoading] = useState(false);

  const handleNavigateToHome = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate("Home");
    }, 500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.expenseText}>Expense Tracker</Text>
        <Image source={require("../assets/images/img-lines.png")} />
        <Text style={styles.mainTitle}>Manage Your Daily Expenses</Text>

        <View style={{ marginTop: 70 }}>
          <Image source={require("../assets/images/img-coins-stack.png")} style={styles.img} />
        </View>
      </View>

      <TouchableOpacity style={styles.btnStyle} onPress={handleNavigateToHome}>
        {isLoading ? <ActivityIndicator size="large" color={COLOR.blueSecondary} /> : <Text style={styles.textBtn}>Click Here</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.bluePrimary,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 100,
  },
  headerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  expenseText: {
    fontFamily: "Inter-Bold",
    fontSize: 36,
    color: COLOR.white,
    marginBottom: 15,
    textAlign: "center",
  },
  mainTitle: {
    fontFamily: "Inter-Medium",
    fontSize: 15,
    color: COLOR.white,
    marginTop: 23,
  },
  img: { width: 125, height: 110 },
  btnStyle: {
    width: 300,
    height: 60,
    backgroundColor: COLOR.white,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  textBtn: {
    fontFamily: "Inter-SemiBold",
    fontSize: 20,
    color: COLOR.blueSecondary,
    textAlign: "center",
  },
});
