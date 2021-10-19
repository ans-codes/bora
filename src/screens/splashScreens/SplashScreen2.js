import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Button = ({ title, btnColor, textColor, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.btnContainer, { backgroundColor: btnColor }]}
  >
    <Text style={[styles.textStyle, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

export default function SplashScreen2({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#495864"
        translucent={true}
      />

      <ImageBackground
        source={require("../../assets/images/dd.png")}
        style={{ flex: 1 }}
      >
        <View>
          <Image
            resizeMode="contain"
            source={require("../../assets/icons/logo.png")}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.buttonMainContainer}>
          <Button
            title="Login"
            onPress={() => navigation.navigate("LoginScreen")}
            btnColor="#EAA795"
            textColor="#FFFFFF"
          />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate("SignupScreen")}
            btnColor="transparent"
            textColor="#6C8193"
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: wp("52%"),
    height: hp("10%"),
    alignSelf: "center",
    marginTop: hp("15%"),
  },
  buttonMainContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  btnContainer: {
    width: wp("95%"),
    height: hp("7%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: hp("1%"),
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "semibold",
  },
});
