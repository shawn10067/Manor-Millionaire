import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import SafeAreaAccountView from "../../../components/SafeAreaAccountView";
import {
  AccountOptionsView,
  CoinsLottie,
  GlobeLottie,
  GlobeView,
  LoginButtonApple,
  LoginEmailButton,
  LogoImage,
  LogoView,
  PlaneLottie,
  PlaneView,
} from "../components/account.screen.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AppleImage = styled(Image).attrs({
  source: require("../../../../assets/apple-logo.png"),
})`
  height: 50px;
  width: 50px;
`;

const LoginScreenApple = ({ navigation }) => {
  return (
    <SafeAreaAccountView>
      <LogoView>
        <LogoImage />
      </LogoView>
      <AccountOptionsView>
        <LoginButtonApple>
          <AppleImage />
        </LoginButtonApple>
        <LoginButtonApple onPress={() => navigation.navigate("Email Login")}>
          <Icon name="email" size={50} color="white" />
        </LoginButtonApple>
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default LoginScreenApple;
