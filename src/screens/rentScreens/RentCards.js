import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const DATA = [
  {
    id: "1",
    title: "Hourly",
    subTitle: " Pay only for the hours you use.",
    price1: "$4",
    price2: "$1",
    timePeriod: "First 2 hours",
    time: "½ hour following",
    iconSource: require("../../assets/icons/timer.png"),
  },
  {
    id: "2",
    title: "Day Pass",
    subTitle: "Unlimited use for entire day.",
    price1: "$10",
    timePeriod: "Full day of use",
    iconSource: require("../../assets/icons/day.png"),
  },
  {
    id: "3",
    title: "Seasonal",
    subTitle: " Pay only for the hours you use.",
    price1: "$79.9",
    timePeriod: "Unlimited rental days",
    iconSource: require("../../assets/icons/seasonal.png"),
  },
];

export default function RentCards() {
  const [click, setClick] = useState(0);

  const renderItem = ({ item, index }) => {
    const OnClick = () => {
      setClick(index);
    };

    return (
      <Pressable
        style={{
          ...styles.cardContainer,
          borderWidth: click === index ? 1 : 0.5,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View>
              <Image
                style={styles.iconCardContainer}
                source={item.iconSource}
              />
            </View>

            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#6C8193",
                  fontFamily: "semibold",
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: "semibold",
                  color: "#C0C9D0",
                }}
              >
                {item.subTitle}
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styles.mostValue,
              display: index === click ? "flex" : "none",
            }}
          >
            <Text
              style={{ color: "#99A8B5", fontFamily: "semibold", fontSize: 11 }}
            >
              Most Value
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "semibold",
                    color: "#6C8193",
                  }}
                >
                  {item.price1}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: "semibold",
                    color: "#C0C9D0",
                  }}
                >
                  {item.timePeriod}
                </Text>
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "semibold",
                    color: "#6C8193",
                  }}
                >
                  {item.price2}
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    fontFamily: "semibold",
                    color: "#C0C9D0",
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={OnClick}
              style={{
                ...styles.select,
                backgroundColor: index === click ? "#EAA795" : "#fff",
              }}
            >
              {index === click ? (
                <Text
                  style={{
                    color: index === click ? "#fff" : "#99A8B5",
                    fontFamily: "semibold",
                  }}
                >
                  Selected
                </Text>
              ) : (
                <Text style={{ color: "#99A8B5", fontFamily: "semibold" }}>
                  Select
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View showsVerticalScrollIndicator={false}>
      <FlatList
        numColumns={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: WIDTH - 30,
    padding: 12,
    borderColor: "#6C8193",
    borderWidth: 0.5,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 8,
  },
  iconCardContainer: {
    width: 38,
    height: 38,
  },
  mostValue: {
    width: 90,
    height: 35,
    borderRadius: 9,
    backgroundColor: "#F3F5F7",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5DBE0",
  },

  select: {
    width: 130,
    height: 43,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D5DBE0",
  },
});
