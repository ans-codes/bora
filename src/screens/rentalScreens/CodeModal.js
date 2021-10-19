import React, { useState } from "react";
import {
    Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity,
    Image
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const CodeModal = ({ navigation }) => {
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
                        <Text style={styles.modalText}>Enter this code to unlock</Text>
                        <Text style={[styles.modalText, { color: "#272E34" }]}>0 9 8 6
                        </Text>

                        <View style={{ flexDirection: "row" }}>
                            <View style={styles.lineBreak}></View>
                            <Text style={{
                                color: "#4958641A",
                                fontFamily: "semibold",
                                fontSize: 10,
                                padding: 10
                            }}>OR</Text>

                            <View style={styles.lineBreak}></View>
                        </View>



                        <View style={styles.btnMainContainer}>
                            <View>
                                <Pressable>
                                    <View style={{
                                        width: wp("85%"),
                                        borderRadius: 10,
                                        height: hp("6%"),
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: "#EAA795",
                                        marginHorizontal: 10,

                                    }}>

                                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                                            style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Image resizeMode="contain"
                                                style={styles.iconStyle}
                                                source={require("../../assets/icons/nfc.png")}

                                            />

                                            <Text style={styles.btnTextStyle}>
                                                Proceed using NFC
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <View
                    style={styles.btnContainer}>
                    <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                        {modalVisible ? "Start" : "Unlock Rack"}
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
        backgroundColor: "#000000AA"
    },
    modalView: {
        width: wp('93%'),
        height: "auto",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginTop: wp(35),
    },
    button: {
        borderRadius: 8,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 16,
        textAlign: "center",
        color: "#6C8193",
        fontFamily: "semibold",
        fontSize: 16
    },
    btnContainer: {
        width: wp("45%"),
        alignSelf: "center",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("1%"),
        borderColor: "#272E34"
    },
    btnMainContainer: {
        flexDirection: "row",
        padding: 15,

    },
    btnTextStyle: {
        fontFamily: "semibold",
        padding: 10,
        color: "#FFFFFF",
        fontSize: 14
    },
    btnContainer: {
        width: wp("45%"),
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("1.5%"),
    },
    textStyle: {
        fontFamily: "semibold",
        padding: 10
    },
    iconStyle: {
        width: 25,
        height: 25,
    },
    lineBreak: {
        borderBottomColor: "#495864",
        borderBottomWidth: 0.5,
        width: wp("37%"),
        justifyContent: "center",
        alignSelf: "center",
    },
});

export default CodeModal;