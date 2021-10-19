import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Ionicons from "react-native-vector-icons/Ionicons";
import CodeModal from "./CodeModal";

const history = [
    {
        id: 1,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 2,
        location: "Baker Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 3,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 4,
        location: "Mile Rock Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 5,
        location: "Marshall's Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 6,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 7,
        location: "China Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 8,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 9,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 10,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
    {
        id: 11,
        location: "Bayview Beach, San Francisco",
        product: "1 Chair Rented",
        orderDate: "03/09/2021",
        orderTime: "18:40 PM",
        payment: "Authorized",
    },
];

export default function RentalsScreen({ navigation }) {
    const [ViewDetails, setViewDetails] = React.useState("none");

    const onClick = () => {
        if (ViewDetails === "none") {
            setViewDetails("flex");
        } else {
            setViewDetails("none");
        }
    };



    return (
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#495864"
                translucent={true}
            />

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}
                    style={styles.headerContainer}>
                    <View>
                        <Image
                            resizeMode="contain"
                            source={require("../../assets/icons/leftIcon.png")}
                            style={styles.iconStyle}
                        />
                    </View>
                    <Text style={styles.txtStyle}>Rental History</Text>
                </TouchableOpacity>

                <View style={styles.msgContainer}>
                    <ScrollView
                        contentContainerStyle={{ paddingBottom: 200 }}
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {history.map((item, index) => (
                            <HistoryItem key={index} item={item} navigation={navigation} />
                        ))}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}
const HistoryItem = ({ item, navigation }) => {
    const [DropDown, setDropDown] = React.useState(false);
    return (
        <View>
            <View>
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.txtStyle1}>{item.location}</Text>
                        <Text style={styles.txtStyle2}>{item.product}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setDropDown(!DropDown)}
                        style={styles.iconPosition}
                    >
                        <Ionicons name={DropDown ? "chevron-up-outline" : "chevron-down-outline"} size={20} color="#272E34" />
                    </TouchableOpacity>
                </View>
                {DropDown && (
                    <View>
                        <View style={styles.detailContainer}>
                            <View>
                                <Text style={styles.txtStyle1}>{item.orderDate}</Text>
                                <Text style={[styles.txtStyle2, { textAlign: "center" }]}>Order Date</Text>
                            </View>
                            <View>
                                <Text style={styles.txtStyle1}>{item.orderTime}</Text>
                                <Text style={[styles.txtStyle2, { textAlign: "center" }]}>Order Time</Text>
                            </View>
                            <View>
                                <Text style={styles.txtStyle1}>{item.payment}</Text>
                                <Text style={[styles.txtStyle2, { textAlign: "center" }]}>Payment</Text>
                            </View>
                        </View>
                        <View style={styles.btnMainContainer}>
                            <Buttons
                                onPress={() => navigation.navigate("Help_Screen")}
                                text="Help"
                                borderWIDTH={0.5}
                                BgColor="#FFFFFF"
                                textColor="#272E34"
                            />

                            <CodeModal />
                        </View>
                    </View>
                )}
            </View>
            <Divider width={0.5} orientation="vertical" color="#495864" />
        </View>
    );
};
const Buttons = ({ text, borderWIDTH, BgColor, textColor, onPress }) => (
    <TouchableOpacity onPress={onPress}
        style={[
            styles.btnContainer,
            {
                borderWidth: borderWIDTH,
                backgroundColor: BgColor
            },
        ]}
    >
        <Text
            style={[
                styles.btnTextStyle,
                {
                    textAlign: "center",
                    color: textColor
                },
            ]}
        >
            {text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: "#272E34",
        flex: 1,
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp("6%"),
        marginLeft: wp("3%"),
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
        textAlign: "center",
    },
    msgContainer: {
        backgroundColor: "#FFFFFF",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 1,
        marginTop: hp("3%"),
    },
    subContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    iconPosition: {
        justifyContent: "center",
        right: 10,
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
    },
    txtStyle1: {
        color: "#272E34",
        fontFamily: "poppinsMedium",
        fontSize: 14,
    },
    txtStyle2: {
        color: "#495864",
        fontFamily: "poppinsMedium",
        fontSize: 10,
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
        justifyContent: "space-between",
        padding: 15,
    },
    btnTextStyle: {
        fontFamily: "semibold",
        padding: 10,
    },
});