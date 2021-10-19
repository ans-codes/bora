import React, { useState } from 'react'
import {
    View, Text, Image, StyleSheet, ImageBackground,
    ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Dimensions,
    StatusBar,
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInput } from 'react-native-paper';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function ResetPasswordScreen1({ navigation }) {
    const [text, setText] = React.useState("");


    return (
        <SafeAreaView>
            <ImageBackground style={styles.bgContainer}
                source={require("../../assets/images/BGG.png")}
            >

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image resizeMode="contain"
                        source={require("../../assets/icons/leftIcon.png")}
                        style={styles.iconStyle}
                    />
                </TouchableOpacity>

                <View>
                    <Image resizeMode="contain"
                        source={require("../../assets/icons/logo.png")}
                        style={styles.imageContainer}
                    />
                </View>

                <View style={styles.txtContainer}>
                    <Text style={styles.textStyle1}>Reset Password</Text>
                    <Text style={styles.textStyle1}>Enter the code received </Text>
                </View>
                <KeyboardAvoidingView enabled={true}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}>
                    <ScrollView>

                        <View>
                            <View style={{ marginTop: hp("2%") }}>
                                <TextInput style={styles.textInputStyle}
                                    label="Code"
                                    value={text}
                                    onChangeText={text => setText(text)}
                                    mode="outlined"
                                    outlineColor="#495864"
                                    keyboardType="default"
                                    theme={{
                                        colors: {
                                            primary: '#495864', underlineColor: 'transparent',
                                            placeholder: '#495864', text: 'white', fontFamily: "semibold"
                                        },
                                        roundness: 14,

                                    }}
                                />
                            </View>

                        </View>

                        <View style={styles.btnMainContainer}>

                            <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen2')}
                                style={styles.btnContainer}>
                                <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                                    Reset Password
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}
                                style={[styles.btnContainer, { backgroundColor: "#272E34", flexDirection: "row" }]}>
                                <Text style={styles.btnTextStyle}>Login Instead</Text>
                            </TouchableOpacity>

                        </View>
                        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />
                    </ScrollView>
                </KeyboardAvoidingView>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bgContainer: {
        width: WIDTH,
        height: HEIGHT
    },
    imageContainer: {
        width: wp("52%"),
        height: hp("10%"),
        alignSelf: "center",
        marginTop: hp("4%")
    },
    txtContainer: {
        marginLeft: wp("4%"),
        marginTop: hp("15%")
    },
    textStyle1: {
        fontSize: 18,
        color: "#EAA795",
        fontFamily: "semibold"
    },
    textInputStyle: {
        marginTop: hp("1%"),
        backgroundColor: "#272E34",
        width: WIDTH / 1.05,
        alignSelf: "center",
        fontFamily: "semibold"

    },

    textStyle: {
        fontFamily: "semibold",
        padding: 10
    },
    btnTextStyle: {
        color: "#464F57",
        textDecorationLine: "underline",
        fontFamily: "semibold",
    },
    iconStyle: {
        width: 13,
        height: 13,
        tintColor: "#EAA795",
        marginTop: hp("5%"),
        marginLeft: wp("4%"),
    },
    btnMainContainer: {
        marginTop: hp("16%")
    },
    btnContainer: {
        width: wp("45%"),
        alignSelf: "center",
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("1%"),
    },
})