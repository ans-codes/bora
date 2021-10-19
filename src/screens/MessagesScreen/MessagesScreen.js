import React from 'react'
import {
    View, Text, StyleSheet, Image,
    TouchableOpacity, StatusBar, KeyboardAvoidingView, SafeAreaView
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import TabViewExample from '../../components/messages/TopTabs';

export default function MessagesScreen({ navigation }) {

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
                    <Text style={styles.txtStyle}>Inbox</Text>

                </TouchableOpacity>
                <View style={styles.msgContainer}>
                    <TabViewExample />
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

    }
})