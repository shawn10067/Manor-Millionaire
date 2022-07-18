import { Platform, SafeAreaView as SafeArea, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";
const SafeAreaView = styled(SafeArea)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
`;

export default SafeAreaView;
