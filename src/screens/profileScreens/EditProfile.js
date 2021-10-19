import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImagePickerExample from "./ImagePicker";

import { TextInput } from "react-native-paper";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function EditProfile({ navigation }) {
  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#495864"
        translucent={true}
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerContainer}
        >
          <View>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/leftIcon.png")}
              style={styles.iconStyle}
            />
          </View>
          <Text style={styles.txtStyle}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.msgContainer}>
          <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView>
              <View style={styles.imagePickerContainer}>
                <ImagePickerExample />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={styles.textInputStyle}
                  label="Name"
                  value={name}
                  onChangeText={(name) => setName(name)}
                  mode="outlined"
                  outlineColor="#6C8193"
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: "#6C8193",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "#272E34",
                    },
                    roundness: 14,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <TextInput
                  style={styles.textInputStyle}
                  label="Saved Location"
                  value={location}
                  onChangeText={(text) => setLocation(text)}
                  mode="outlined"
                  outlineColor="#6C8193"
                  keyboardType="default"
                  theme={{
                    colors: {
                      primary: "#6C8193",
                      underlineColor: "transparent",
                      placeholder: "#495864",
                      text: "#272E34",
                    },
                    roundness: 14,
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile__Screen")}
                style={styles.btnContainer}
              >
                <Text
                  style={[
                    styles.textStyle,
                    { color: "#FFFFFF", textAlign: "center" },
                  ]}
                >
                  Save Details
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#272E34",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("6%"),
    marginLeft: wp("4%"),
  },
  iconStyle: {
    width: 13,
    height: 13,
  },
  iconStyle2: {
    tintColor: "#EAA795",
    width: 38,
    height: 38,
    marginLeft: wp("10%"),
  },
  txtContainer: {
    marginLeft: wp("5%"),
  },
  txtStyle: {
    fontFamily: "semibold",
    fontSize: 15,
    color: "#FFFFFF",
    alignSelf: "center",
    marginLeft: 10,
    textAlign: "center",
  },
  txtStyle1: {
    fontFamily: "semibold",
    fontSize: 16,
    color: "#272E34",
    textAlign: "left",
  },
  txtStyle2: {
    color: "#C8C9CB",
    fontSize: 12,
    fontFamily: "poppinsMedium",
    textAlign: "left",
  },
  msgContainer: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    marginTop: hp("3%"),
  },
  imgContainer: {
    height: 120,
    width: 120,
    borderRadius: 360,
    alignSelf: "center",
    marginTop: hp("4"),
    margin: 12,
  },
  btnContainer: {
    width: wp("50%"),
    alignSelf: "center",
    backgroundColor: "#EAA795",
    borderRadius: 10,
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("20%"),
  },
  textStyle: {
    fontFamily: "semibold",
    padding: 10,
  },
  imagePickerContainer: {
    alignSelf: "center",
    marginTop: hp("4"),
    margin: 12,
  },
  textInputStyle: {
    marginTop: hp("1%"),
    backgroundColor: "#FFFFFF",
    width: WIDTH / 1.05,
    alignSelf: "center",
    fontFamily: "semibold",
  },
});
