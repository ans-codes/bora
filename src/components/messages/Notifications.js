import React from 'react'
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView, FlatList } from 'react-native'
import { Divider } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const notifications = [
    {
        id: 1,
        msg: "Your order has been confirmed!",
        time: "1 day ago"
    },
    {
        id: 2,
        msg: "You have booked a Season Pass!",
        time: "2 days ago"
    },
    {
        id: 3,
        msg: "Refund approved",
        time: "2 days ago"
    },
    {
        id: 4,
        msg: "Your order has been confirmed!",
        time: "3 days ago"
    }
    , {
        id: 5,
        msg: "Your order has been confirmed!",
        time: "1 month ago"
    },
    {
        id: 6,
        msg: "Order Started",
        time: "1 month ago"
    },
    {
        id: 7,
        msg: "Your order has been confirmed!",
        time: "1 month ago"
    },
    {
        id: 8,
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        id: 9,
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        id: 10,
        msg: "You have booked a Day Pass!",
        time: "1 month ago"
    }
    ,
    {
        id: 11,
        msg: "You have booked a Day Pass!",
        time: "2 month ago"
    }
]
export default function Notifications() {


    return (
        <FlatList
            data={notifications}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <View style={{ flex: 1, bottom: 10 }}>
                        <View
                            style={styles.textContainer}>
                            <Text style={styles.txtStyle1}>{item.msg}</Text>
                            <Text style={styles.txtStyle2}>{item.time}</Text>
                        </View>
                        <Divider
                            width={0.5}
                            orientation="vertical"
                            color="#495864"
                        />
                    </View>
                );
            }}
        />
    );
}


const styles = StyleSheet.create({
    textContainer: {
        marginLeft: wp("3%"),
        padding: 10,
        left: 0
    },
    txtStyle1: {
        color: "#272E34",
        fontFamily: "poppinsMedium",
        fontSize: 14
    },
    txtStyle2: {
        color: "#495864",
        fontFamily: "poppinsMedium",
        fontSize: 10
    }
})