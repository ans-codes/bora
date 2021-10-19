import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ConfirmationModal = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirmation</Text>
            <Text
              style={[
                styles.modalText,
                { color: "#272E34", fontFamily: "poppinsRegular" },
              ]}
            >
              Are you sure you want to rent
              <Text style={[styles.modalText, { color: "#272E34" }]}>
                {" "}
                1 chair{" "}
              </Text>
              from{" "}
              <Text style={[styles.modalText, { color: "#272E34" }]}>
                Bayview Beach, San Francisco?
              </Text>
            </Text>
            <View style={styles.btnMainContainer}>
              <View>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <View
                    style={{
                      width: wp("40%"),
                      borderRadius: 12,
                      height: hp("6%"),
                      alignItems: "center",
                      justifyContent: "center",
                      borderColor: "#272E34",
                      borderWidth: 1,
                      backgroundColor: "#FFFFFF",
                      marginHorizontal: 10,
                    }}
                  >
                    <Text style={styles.btnTextStyle}>Cancel</Text>
                  </View>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <View
                    style={{
                      width: wp("40%"),
                      borderRadius: 10,
                      height: hp("6%"),
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#EAA795",
                      marginHorizontal: 10,
                    }}
                  >
                    <TouchableOpacity onPress={onPress}>
                      <Text style={styles.btnTextStyle}>Proceed</Text>
                    </TouchableOpacity>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.btnContainer}>
          <Text
            style={[
              styles.textStyle,
              { color: "#FFFFFF", textAlign: "center", fontSize: 13 },
            ]}
          >
            Confirm & Proceed to Payment
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000AA",
  },
  modalView: {
    width: wp("93%"),
    height: hp("28%"),
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 16,
    textAlign: "center",
    color: "#6C8193",
    fontFamily: "semibold",
    fontSize: 16,
  },
  btnContainer: {
    width: wp("45%"),
    alignSelf: "center",
    borderRadius: 10,
    height: hp("6%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1%"),
    borderColor: "#272E34",
  },
  btnMainContainer: {
    flexDirection: "row",
    padding: 15,
  },
  btnTextStyle: {
    fontFamily: "poppinsRegular",
    padding: 10,
    color: "#272E34",
  },
  btnContainer: {
    width: wp("93%"),
    alignSelf: "center",
    backgroundColor: "#EAA795",
    borderRadius: 10,
    height: hp("5.5%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1.5%"),
  },
  textStyle: {
    fontFamily: "semibold",
    padding: 10,
  },
});

export default ConfirmationModal;
