import React from 'react'
import {
    View, Text, StyleSheet, TouchableOpacity,
    Image, StatusBar, SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Divider } from 'react-native-elements';

export default function Profile_Screen({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#495864" translucent={true} />
            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.headerContainer}>
                    <View>
                        <Image resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>My Account</Text>
                </TouchableOpacity>
                <View style={styles.msgContainer}>
                    <View>
                        <Image source={require("../../assets/images/Image.png")}
                            style={styles.imgContainer} />
                        <Text style={[styles.txtStyle, { fontSize: 20, color: "#272E34" }]}>Siddhant
                            Sharma</Text>
                    </View>
                    <MyOptionList onPress={() => navigation.navigate("Edit_Profile")}
                        icon={require("../../assets/icons/Profile.png")}
                        text1="Personal"
                        text2="Name & Saved Locations"
                    />
                    <MyOptionList
                        onPress={() => navigation.navigate("Rentals_Screen")}
                        icon={require("../../assets/icons/receipt.png")}
                        text1="Rentals"
                        text2="Rental History"
                    />
                    <MyOptionList onPress={() => navigation.navigate("Edit_Password")}
                        icon={require("../../assets/icons/Lock.png")}
                        text1="Passwords"
                        text2="Change Password"
                    />

                    <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}
                        style={styles.btnContainer}>
                        <Text style={[styles.textStyle, { color: "#FFFFFF", textAlign: "center" }]}>
                            Logout
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

const MyOptionList = ({ icon, text1, text2, onPress }) => (
    <>
        <View style={{ flexDirection: "row", marginTop: hp("4%"), bottom: 10 }}>
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image resizeMode="contain"
                    source={icon}
                    style={styles.iconStyle2}
                />
            </View>
            <TouchableOpacity onPress={onPress}
                style={styles.txtContainer}>
                <Text style={styles.txtStyle1}>{text1}</Text>
                <Text style={styles.txtStyle2}>
                    {text2}</Text>
            </TouchableOpacity>
        </View>
        <Divider
            width={0.5}
            orientation="vertical"
            color="#C8C9CB"
        />
    </>
)
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
    iconStyle2: {
        tintColor: "#EAA795",
        width: 38,
        height: 38,
        marginLeft: wp('10%'),
    },
    txtContainer: {
        marginLeft: wp('5%'),
    },
    txtStyle: {
        fontFamily: "semibold",
        fontSize: 15,
        color: "#FFFFFF",
        alignSelf: "center",
        marginLeft: 10,
        textAlign: "center"
    },
    txtStyle1: {
        fontFamily: "semibold",
        fontSize: 16,
        color: "#272E34",
        textAlign: 'left',
    },
    txtStyle2: {
        color: "#C8C9CB",
        fontSize: 12,
        fontFamily: "poppinsMedium",
        textAlign: 'left',
    },
    msgContainer: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        marginTop: hp("3%")
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
        marginTop: hp("5%")
    },
    textStyle: {
        fontFamily: "semibold",
        padding: 10
    },
})