import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { TextInput } from "react-native-paper";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function OrderSummaryScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expiration, setExpiration] = React.useState("");
  const [cvc, setCVC] = React.useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.header}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#495864"
          translucent={true}
        />

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
          <Text style={styles.txtStyle}>Order Summary</Text>
        </TouchableOpacity>

        <View style={styles.msgContainer}>

          <View style={styles.txtContainer}>
            <View>
              <Text style={styles.txtStyle1}>1 Chair</Text>
              <Text
                style={[styles.txtStyle1, { color: "#A8AFB5", fontSize: 13 }]}
              >
                Quantity to Rent
              </Text>
            </View>
            <View>
              <Text style={styles.txtStyle1}>$50.00</Text>
              <Text
                style={[styles.txtStyle1, { color: "#A8AFB5", fontSize: 13 }]}
              >
                Authorization Amount
              </Text>
            </View>
          </View>
          <View style={{ paddingLeft: 20 }}>
            <Text style={styles.txtStyle1}>Bayview Beach, San Francisco</Text>
            <Text
              style={[styles.txtStyle1, { color: "#A8AFB5", fontSize: 13 }]}
            >
              Renting Location
            </Text>
          </View>

          <KeyboardAvoidingView
            enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 150 }}
            >
              <View>
                <View style={{ marginTop: hp("1%") }}>
                  <TextInput
                    style={styles.textInputStyle}
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    mode="outlined"
                    outlineColor="#A8AFB5"
                    keyboardType="default"
                    theme={{
                      colors: {
                        primary: "#A8AFB5",
                        underlineColor: "transparent",
                        placeholder: "#495864",
                        text: "#272E34",
                        fontFamily: "semibold",
                      },
                      roundness: 14,
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.textInputStyle}
                    label="Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    mode="outlined"
                    outlineColor="#A8AFB5"
                    keyboardType="default"
                    theme={{
                      colors: {
                        primary: "#A8AFB5",
                        underlineColor: "transparent",
                        placeholder: "#495864",
                        text: "#272E34",
                        fontFamily: "semibold",
                      },
                      roundness: 14,
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.textInputStyle}
                    label="City"
                    value={city}
                    onChangeText={(text) => setCity(text)}
                    mode="outlined"
                    outlineColor="#A8AFB5"
                    keyboardType="default"
                    theme={{
                      colors: {
                        primary: "#A8AFB5",
                        underlineColor: "transparent",
                        placeholder: "#495864",
                        text: "#272E34",
                        fontFamily: "semibold",
                      },
                      roundness: 14,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View>
                    <TextInput
                      style={[styles.textInputStyle, { width: WIDTH / 2.2 }]}
                      label="State"
                      value={state}
                      onChangeText={(text) => setState(text)}
                      mode="outlined"
                      outlineColor="#A8AFB5"
                      keyboardType="default"
                      theme={{
                        colors: {
                          primary: "#A8AFB5",
                          underlineColor: "transparent",
                          placeholder: "#495864",
                          text: "#272E34",
                          fontFamily: "semibold",
                        },
                        roundness: 14,
                      }}
                    />
                  </View>
                  <View>
                    <TextInput
                      style={[styles.textInputStyle, { width: WIDTH / 2.2 }]}
                      label="Zip"
                      value={zip}
                      onChangeText={(text) => setZip(text)}
                      mode="outlined"
                      outlineColor="#A8AFB5"
                      keyboardType="default"
                      theme={{
                        colors: {
                          primary: "#A8AFB5",
                          underlineColor: "transparent",
                          placeholder: "#495864",
                          text: "#272E34",
                          fontFamily: "semibold",
                        },
                        roundness: 14,
                      }}
                    />
                  </View>
                </View>

                <View>
                  <TextInput
                    style={styles.textInputStyle}
                    label="Card Number"
                    value={cardNumber}
                    onChangeText={(text) => setCardNumber(text)}
                    mode="outlined"
                    outlineColor="#A8AFB5"
                    keyboardType="default"
                    theme={{
                      colors: {
                        primary: "#A8AFB5",
                        underlineColor: "transparent",
                        placeholder: "#495864",
                        text: "#272E34",
                        fontFamily: "semibold",
                      },
                      roundness: 14,
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <View>
                    <TextInput
                      style={[styles.textInputStyle, { width: WIDTH / 2.2 }]}
                      label="Expiration"
                      value={expiration}
                      onChangeText={(text) => setExpiration(text)}
                      mode="outlined"
                      outlineColor="#A8AFB5"
                      keyboardType="default"
                      theme={{
                        colors: {
                          primary: "#A8AFB5",
                          underlineColor: "transparent",
                          placeholder: "#495864",
                          text: "#272E34",
                          fontFamily: "semibold",
                        },
                        roundness: 14,
                      }}
                    />
                  </View>
                  <View>
                    <TextInput
                      style={[styles.textInputStyle, { width: WIDTH / 2.2 }]}
                      label="CVC"
                      value={cvc}
                      onChangeText={(text) => setCVC(text)}
                      mode="outlined"
                      outlineColor="#A8AFB5"
                      keyboardType="default"
                      theme={{
                        colors: {
                          primary: "#A8AFB5",
                          underlineColor: "transparent",
                          placeholder: "#495864",
                          text: "#272E34",
                          fontFamily: "semibold",
                        },
                        roundness: 14,
                      }}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.btnMainContainer}>
                <TouchableOpacity style={styles.btnContainer}>
                  <Text
                    style={[
                      styles.textStyle,
                      { color: "#FFFFFF", textAlign: "center" },
                    ]}
                  >
                    Pay Now
                  </Text>
                </TouchableOpacity>
                <View>
                  <Text
                    style={[
                      styles.txtStyle1,
                      {
                        color: "#A8AFB5",
                        fontSize: 13,
                        alignSelf: "center",
                        top: 4,
                      },
                    ]}
                  >
                    Safe and Secure
                  </Text>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#495864"
        translucent={true}
      />
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
    fontSize: 17,
    color: "#272E34",
  },
  msgContainer: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    marginTop: hp("3%"),
  },
  txtContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  btnMainContainer: {
    marginTop: hp("2%"),
  },
  btnContainer: {
    width: WIDTH / 1.05,
    alignSelf: "center",
    backgroundColor: "#EAA795",
    borderRadius: 10,
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("0.1%"),
  },
  textInputStyle: {
    marginTop: hp("0.1%"),
    backgroundColor: "#FFFFFF",
    width: WIDTH / 1.05,
    alignSelf: "center",
    fontFamily: "semibold"

  },
  textStyle: {
    fontFamily: "semibold",
    padding: 10,
  },
});
