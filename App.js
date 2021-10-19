import * as React from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RootNavigation from "./src/Navigation";

export default function App() {
  const [loaded] = useFonts({
    semibold: require("./src/assets/fonts/semibold.ttf"),
    poppinsMedium: require("./src/assets/fonts/poppinsMedium.ttf"),
    poppinsRegular: require("./src/assets/fonts/poppinsRegular.ttf"),
  });
  if (!loaded) {
    return <AppLoading />;
  }

  return <RootNavigation />;
}
