import React, { useState } from 'react'
import {
    View, Text, Image, StyleSheet, ImageBackground,
    ScrollView, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Dimensions,
    StatusBar,
} from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from "axios"
import { TextInput } from 'react-native-paper';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [show, setShow] = React.useState(false);
    const [visible, setVisible] = React.useState(true);

    const login = async () => {

        const resp = await axios.post("http://bora.true2air.com:3000/api/login");
        return resp.data.results;
    }

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
                    <Text style={styles.textStyle1}>Welcome!</Text>
                    <Text style={styles.textStyle1}>Login to Bora</Text>
                </View>
                <KeyboardAvoidingView enabled={true}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}>
                    <ScrollView>

                        <View>
                            <View style={{ marginTop: hp("2%") }}>
                                <TextInput style={styles.textInputStyle}
                                    label="Email"
                                    value={username}
                                    onChangeText={username => setUsername(username)}
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

                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                alignSelf: "center"
                            }}>

                                <TextInput style={styles.textInputStyle}
                                    label="Password"
                                    value={password}
                                    onChangeText={password => setPassword(password)}
                                    mode="outlined"
                                    outlineColor="#495864"
                                    keyboardType="default"
                                    secureTextEntry={visible}
                                    theme={{
                                        colors: {
                                            primary: '#495864', underlineColor: 'transparent',
                                            placeholder: '#495864', text: 'white',
                                        },
                                        roundness: 14
                                    }}
                                />
                                <TouchableOpacity style={{
                                    position: "absolute",
                                    right: 20,
                                    zIndex: 200,
                                    alignItems: "center",
                                    top: 30

                                }}
                                    onPress={() => {
                                        setVisible(!visible)
                                        setShow(!show)
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        style={{ zIndex: 200 }}
                                        name={show === false ? "eye-off-outline" : "eye-outline"}
                                        size={24}
                                        color="#495864"
                                    />
                                </TouchableOpacity>

                            </View>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                            <Text style={[styles.textStyle, { color: "#495864", textAlign: "right", textDecorationLine: "underline" }]}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.btnMainContainer}>

                            <TouchableOpacity onPress={login}
                                style={styles.btnContainer}>
                                <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("SignupScreen")}
                                style={[styles.btnContainer, { backgroundColor: "#272E34", flexDirection: "row" }]}>
                                <Text style={[styles.textStyle, { color: "#464F57", textAlign: "center", padding: 4 }]}>New User?</Text>
                                <Text style={styles.btnTextStyle}>Signup</Text>
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
    bottomBG: {
        width: WIDTH,
        marginTop: hp("30%")
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
        marginTop: hp("4%")
    },
    btnContainer: {
        width: wp("40%"),
        alignSelf: "center",
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("1%"),
    },
})