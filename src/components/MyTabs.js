import * as React from "react";

import {
    StyleSheet, TouchableOpacity, Image, Text,
    View,
} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile_Screen from "../screens/profileScreens/Profile_Screen";
import MessagesScreen from "../screens/MessagesScreen/MessagesScreen";
import RentalsScreen from "../screens/rentalScreens/RentalsScreen";
import RentScreen from "../screens/rentScreens/RentScreen";
import OrderSummaryScreen from "../screens/rentScreens/OrderSummaryScreen"
import HelpScreen from "../screens/rentalScreens/HelpScreen";
import EditProfile from "../screens/profileScreens/EditProfile";
import EditPassword from "../screens/profileScreens/EditPassword";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const RentStack = createNativeStackNavigator();

function RentStackScreen() {
    const screenOptions = {
        headerShown: false,
    };
    return (
        <RentStack.Navigator screenOptions={screenOptions}>
            <RentStack.Screen name="Rent_Screen" component={RentScreen} />
            <RentStack.Screen name="OrderSummary_Screen" component={OrderSummaryScreen} />
        </RentStack.Navigator>
    );
}

const RentalStack = createNativeStackNavigator();

function RentalStackScreen() {
    const screenOptions = {
        headerShown: false,
    };
    return (
        <RentalStack.Navigator screenOptions={screenOptions}>
            <RentalStack.Screen name="Rentals_Screen" component={RentalsScreen} />
            <RentalStack.Screen name="Help_Screen" component={HelpScreen} />
        </RentalStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
    const screenOptions = {
        headerShown: false,
        tabBarHideOnKeyboard: true
    };
    return (
        <ProfileStack.Navigator screenOptions={screenOptions}>
            <ProfileStack.Screen name="Profile__Screen" component={Profile_Screen} />
            <ProfileStack.Screen name="Edit_Profile" component={EditProfile} />
            <ProfileStack.Screen name="Edit_Password" component={EditPassword} />
        </ProfileStack.Navigator>
    );
}



const Tab = createBottomTabNavigator();

function MyTabs() {


    return (
        <Tab.Navigator

            screenOptions={{
                tabBarShowLabel: false,
                lazy: false,
                tabBarStyle: {
                    flexDirection: "row",
                    //marginHorizontal: 20,
                    justifyContent: 'space-evenly',
                    backgroundColor: "#272E34",
                    width: wp("100%"),
                    alignSelf: "center",
                    height: hp("10%"),
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    bottom: 0,
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}
        >

            <Tab.Screen

                options={{
                    tabBarLabel: "",
                    tabBarIcon:
                        ({ focused, tintColor, color }) => {
                            if (focused)
                                return (<View style={{
                                    backgroundColor: '#EAA795',
                                    borderRadius: 68, height: '70%', width: wp(22), elevation: 10, borderRadius: 68, justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/home.png")}
                                        style={[styles.iconStyle, { tintColor: '#272E34', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: '#272E34' }]}>
                                        Rent</Text>
                                </View>)
                            else
                                return (
                                    <View>
                                        <Image resizeMode="contain"
                                            source={require("../assets/icons/home.png")}
                                            style={[styles.iconStyle, { tintColor: '#6C8193', }]}

                                        />
                                        <Text style={[styles.textStyle, { fontSize: 10, }]}>
                                            Rent</Text>
                                    </View>
                                )
                        },
                }}
                name="RentScreen"
                component={RentStackScreen}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: "",
                    tabBarIcon:
                        ({ focused, tintColor, color }) => {
                            if (focused)
                                return (<View style={{
                                    backgroundColor: '#EAA795',
                                    borderRadius: 68, height: '70%', width: wp(22), elevation: 10, borderRadius: 68, justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/rentals.png")}
                                        style={[styles.iconStyle, { tintColor: '#272E34', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: '#272E34' }]}>
                                        Rentals</Text>
                                </View>)
                            else
                                return (
                                    <View>
                                        <Image resizeMode="contain"
                                            source={require("../assets/icons/rentals.png")}
                                            style={[styles.iconStyle, { tintColor: '#6C8193', }]}

                                        />
                                        <Text style={[styles.textStyle, { fontSize: 10, }]}>
                                            Rentals</Text>
                                    </View>
                                )
                        },
                }}
                name="RentalsScreen"
                component={RentalStackScreen}
            />

            <Tab.Screen
                options={{


                    tabBarLabel: "",
                    tabBarIcon:
                        ({ focused, tintColor, color }) => {
                            if (focused)
                                return (<View style={{
                                    backgroundColor: '#EAA795',
                                    borderRadius: 68, height: '70%', width: wp(22), elevation: 10, borderRadius: 68, justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/msg.png")}
                                        style={[styles.iconStyle, { tintColor: '#272E34', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: '#272E34' }]}>
                                        Messages</Text>
                                </View>)
                            else
                                return (
                                    <View>
                                        <Image resizeMode="contain"
                                            source={require("../assets/icons/msg.png")}
                                            style={[styles.iconStyle, { tintColor: '#6C8193', }]}

                                        />
                                        <Text style={[styles.textStyle, { fontSize: 10, }]}>
                                            Messages</Text>
                                    </View>
                                )
                        },
                }}
                name="MessagesScreen"
                component={MessagesScreen}
            />

            <Tab.Screen
                options={{
                    tabBarLabel: "",
                    tabBarIcon:
                        ({ focused, tintColor, color }) => {
                            if (focused)
                                return (<View style={{
                                    backgroundColor: '#EAA795',
                                    borderRadius: 68, height: '70%', width: wp(22), elevation: 10, borderRadius: 68, justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image resizeMode="contain"
                                        source={require("../assets/icons/Profile.png")}
                                        style={[styles.iconStyle, { tintColor: '#272E34', }]}

                                    />
                                    <Text style={[styles.textStyle, { fontSize: 10, color: '#272E34' }]}>
                                        Profile</Text>
                                </View>)
                            else
                                return (
                                    <View>
                                        <Image resizeMode="contain"
                                            source={require("../assets/icons/Profile.png")}
                                            style={[styles.iconStyle, { tintColor: '#6C8193', }]}

                                        />
                                        <Text style={[styles.textStyle, { fontSize: 10, }]}>
                                            Profile</Text>
                                    </View>
                                )
                        },
                }}
                name="Profile_Screen"
                component={ProfileStackScreen}
            />

        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    TabContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-evenly",
        backgroundColor: "#272E34",
        width: wp("100%"),
        alignSelf: "center",
        height: hp("10%"),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,



    },
    iconStyle: {
        marginBottom: 3,
        alignSelf: "center",
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontFamily: "semibold",
        color: "#6C8193",
        textAlign: "center",
        fontSize: 10,
    }
})


export default MyTabs;