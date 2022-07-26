import { Platform, SafeAreaView as SafeArea, StatusBar } from "react-native";
import styled from "styled-components/native";
import BackgroundView from "../components/BackgroundView";
import SafeAreaView from "./SafeAreaView";

const isAndroid = Platform.OS === "android";
const SafeAreaViewGrey = styled(SafeArea)`
  flex: 1;
  background-color: ${({ theme }) => theme.colours.main.grey};
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;
const SafeAreaViewWhite = styled(SafeArea)`
  flex: 0;
  background-color: ${({ theme }) => theme.colours.main.white};
`;

const SafeAreaAccountView = ({ children }) => {
  if (isAndroid) {
    return (
      <BackgroundView>
        <SafeAreaView>{children}</SafeAreaView>
      </BackgroundView>
    );
  }
  return (
    <>
      <SafeAreaViewGrey>{children}</SafeAreaViewGrey>
      <SafeAreaViewWhite />
    </>
  );
};

export default SafeAreaAccountView;
