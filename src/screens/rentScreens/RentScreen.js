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
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "react-native-vector-icons/Ionicons";

import RentCards from "./RentCards";
import ConfirmationModal from "./ConfirmationModal";

export default function RentScreen({ navigation }) {
  const [activeButton, setActiveButton] = React.useState("Selected");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#495864"
          translucent={true}
        />

        <TouchableOpacity style={styles.headerContainer}>
          <View>
            <Image
              resizeMode="contain"
              source={require("../../assets/icons/location.png")}
              style={styles.iconStyle}
            />
          </View>
          <View>
            <Text style={styles.txtStyle}>Bayview Beach, San Francisco</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.msgContainer}>
          <View style={{ paddingTop: 10, paddingLeft: 15 }}>
            <Text style={styles.txtStyle1}> Unlock</Text>
            <Text style={styles.txtStyle1}> & Unwind</Text>
          </View>
          <RentCards />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              marginRight: 20, marginTop: 6
            }}
          >
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.txtStyle1, { fontSize: 13 }]}>
                  1 Chair{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("OrderSummaryScreen")}
                >
                  <Ionicons
                    name="chevron-down-outline"
                    size={15}
                    color="#495864"
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={[styles.txtStyle1, { fontSize: 9, color: "#C0C9D0" }]}
              >
                Quantity to Rent
              </Text>
            </View>
            <View>
              <View>
                <Text style={[styles.txtStyle1, { fontSize: 13 }]}>
                  27 Chairs
                </Text>
                <Text
                  style={[
                    styles.txtStyle1,
                    { fontSize: 10, color: "#C0C9D0" },
                  ]}
                >
                  Available Quantity
                </Text>
              </View>
            </View>
          </View>

          <ConfirmationModal
            onPress={() => navigation.navigate("OrderSummary_Screen")}
          />
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
    width: 20,
    height: 20,
    tintColor: "#EAA795",
  },
  txtStyle: {
    fontFamily: "semibold",
    fontSize: 15,
    color: "#FFFFFF",
    alignSelf: "center",
    marginLeft: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
    borderStyle: "dotted",
    borderRadius: 0.5,
  },
  txtStyle1: {
    color: "#495864",
    fontSize: 15,
    fontFamily: "semibold",
    textAlignVertical: "center",
  },
  msgContainer: {
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    marginTop: hp("3%"),
  },
  icon: {
    height: 46,
    width: 46,
    alignItems: "center",
    justifyContent: "center",
  },
  txtIconStyle: {
    flexDirection: "row",
  },
});
