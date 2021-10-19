import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, StatusBar, Dimensions, ScrollView,
    KeyboardAvoidingView,
    SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-paper';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


export default function EditPassword({ navigation }) {

    const [password1, setPassword1] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [password3, setPassword3] = React.useState("");

    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [visible1, setVisible1] = React.useState(true);
    const [visible2, setVisible2] = React.useState(true);
    const [visible3, setVisible3] = React.useState(true);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />

                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.headerContainer}>
                    <View>
                        <Image resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>Edit Password</Text>

                </TouchableOpacity>



                <View style={styles.msgContainer}>

                    <KeyboardAvoidingView enabled={true}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ flex: 1 }}>
                        <ScrollView style={{ flex: 1 }}>

                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                alignSelf: "center"
                            }}>

                                <TextInput style={styles.textInputStyle}
                                    label="Enter New Password"
                                    value={password1}
                                    onChangeText={password => setPassword1(password)}
                                    mode="outlined"
                                    outlineColor="#495864"
                                    keyboardType="default"
                                    secureTextEntry={visible1}
                                    theme={{
                                        colors: {
                                            primary: '#495864', underlineColor: 'transparent',
                                            placeholder: '#495864', text: '#272E34',
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
                                        setVisible1(!visible1)
                                        setShow1(!show1)
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        style={{ zIndex: 200 }}
                                        name={show1 === false ? "eye-off-outline" : "eye-outline"}
                                        size={24}
                                        color="#495864"
                                    />
                                </TouchableOpacity>

                            </View>


                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                alignSelf: "center"
                            }}>

                                <TextInput style={styles.textInputStyle}
                                    label="Confirm New Password"
                                    value={password2}
                                    onChangeText={password => setPassword2(password)}
                                    mode="outlined"
                                    outlineColor="#495864"
                                    keyboardType="default"
                                    secureTextEntry={visible2}
                                    theme={{
                                        colors: {
                                            primary: '#495864', underlineColor: 'transparent',
                                            placeholder: '#495864', text: '#272E34',
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
                                        setVisible2(!visible2)
                                        setShow2(!show2)
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        style={{ zIndex: 200 }}
                                        name={show2 === false ? "eye-off-outline" : "eye-outline"}
                                        size={24}
                                        color="#495864"
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{
                                flexDirection: "row", alignItems: "center",
                                alignSelf: "center"
                            }}>

                                <TextInput style={styles.textInputStyle}
                                    label="Confirm New Password"
                                    value={password3}
                                    onChangeText={password3 => setPassword3(password3)}
                                    mode="outlined"
                                    outlineColor="#495864"
                                    keyboardType="default"
                                    secureTextEntry={visible3}
                                    theme={{
                                        colors: {
                                            primary: '#495864', underlineColor: 'transparent',
                                            placeholder: '#495864', text: '#272E34',
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
                                        setVisible3(!visible3)
                                        setShow3(!show3)
                                    }}
                                >
                                    <MaterialCommunityIcons
                                        style={{ zIndex: 200 }}
                                        name={show3 === false ? "eye-off-outline" : "eye-outline"}
                                        size={24}
                                        color="#495864"
                                    />
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate("Profile__Screen")}
                                style={styles.btnContainer}>
                                <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                                    Save Password
                                </Text>
                            </TouchableOpacity>

                            <View>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>

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
    btnContainer: {
        width: wp("50%"),
        alignSelf: "center",
        backgroundColor: "#EAA795",
        borderRadius: 10,
        height: hp("6%"),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp("35%")
    },
    textStyle: {
        fontFamily: "semibold",
        padding: 10
    },
    textInputStyle: {
        marginTop: hp("1%"),
        backgroundColor: "#FFFFFF",
        width: WIDTH / 1.05,
        alignSelf: "center",
        fontFamily: "semibold"

    },
})