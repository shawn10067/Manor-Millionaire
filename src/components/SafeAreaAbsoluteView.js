import React from "react";
import { Platform } from "react-native";
import SafeAreaView from "./SafeAreaView";

const SafeAreaAbsoluteView = ({ children }) => {
  return Platform.OS === "ios" ? (
    <SafeAreaView>{children}</SafeAreaView>
  ) : (
    <>{children}</>
  );
};

export default SafeAreaAbsoluteView;
