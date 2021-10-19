import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, TextInput, Keyboard, SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HelpScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.headerContainer}>
                    <View>
                        <Image resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>Help</Text>

                </TouchableOpacity>
                <View style={styles.msgContainer}>
                    <View>
                        <Text style={styles.textStyle}>Leave a message</Text>
                        <View style={styles.txtInputStyle}>
                            <TextInput
                                multiline={true}
                                placeholder="Start typing..."
                                style={styles.textInput}
                                placeholderTextColor="#707070"
                                fontFamily="poppins.regular"
                                returnKeyType="done"
                                editable={true}
                                onSubmitEditing={Keyboard.dismiss}
                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("Rentals_Screen")}
                            style={styles.btnContainer}>
                            <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.txtContainer}>
                        <Text style={styles.txtStyle1}>
                            or call us at
                        </Text>
                        <TouchableOpacity>
                            <Text style={[styles.txtStyle1, { textDecorationLine: "underline", left: 6 }]}>+01 0978 2761 56</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#272E34",
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center", marginTop: hp("6%"),
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
        textAlign: "center"
    },
    msgContainer: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        marginTop: hp("3%")

    },
    textStyle: {
        fontFamily: "semibold",
        padding: 10,
        marginLeft: wp("2%")
    },
    txtInputStyle: {
        height: hp("25%"),
        borderWidth: 1,
        width: wp("93%"),
        alignSelf: "center",
        borderRadius: 14,
        borderColor: "#707070",
        padding: 10
    },
    textInput: {
        fontWeight: '400',
        fontSize: 14,
    },
    btnContainer: {
        width: wp("95%"),
        alignSelf: "center",
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("3%")
    },
    txtContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: hp("2%")
    },
    txtStyle1: {
        color: "#A9B0B6",
        fontFamily: "semibold",
        fontSize: 12
    }
})