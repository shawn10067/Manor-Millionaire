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

const AppleImage = styled(Image).attrs({
  source: require("../../../../assets/apple-logo.png"),
})`
  height: 50px;
  width: 50px;
`;

const SignUpScreenApple = ({ navigation }) => {
  return (
    <SafeAreaAccountView>
      <LogoView>
        <LogoImage />
      </LogoView>
      <GlobeView>
        <GlobeLottie>
          <PlaneView>
            <PlaneLottie>
              <CoinsLottie />
            </PlaneLottie>
          </PlaneView>
        </GlobeLottie>
      </GlobeView>
      <AccountOptionsView>
        <LoginButtonApple>
          <AppleImage />
        </LoginButtonApple>
        <LoginEmailButton onPress={() => navigation.navigate("Email Signup")} />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default SignUpScreenApple;
