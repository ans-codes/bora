import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NativeBaseProvider, Box, Text } from "native-base";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Constants from "expo-constants";

const FirstRoute = () => <Notifications />;
const SecondRoute = () => <Messages />;

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
});

export default function TabViewExample() {
  const myRef = React.useRef({})
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 1, title: "Notifications" },
    { key: 2, title: "Messages" },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" ref={myRef}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? "#EAA795" : "#a1a1aa";
          const borderColor = index === i ? "#EAA795" : "coolGray.200";

          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              overflow="hidden"
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"

            >
              <Pressable
                onPress={() => {
                  console.log(i);
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ color, fontFamily: "semibold" }}>
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        keyboardHidesTabBar={true}
        keyboardDismissMode={true}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
      />
    </NativeBaseProvider>
  );
}
