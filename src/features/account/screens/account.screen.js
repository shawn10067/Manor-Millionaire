import React from "react";
import { Platform } from "react-native";
import SafeAreaAccountView from "../../../components/SafeAreaAccountView";
import {
  AccountOptionsView,
  CoinsLottie,
  GlobeLottie,
  GlobeView,
  LoginButton,
  LogoImage,
  LogoView,
  PlaneLottie,
  PlaneView,
  SignUpButton,
} from "../components/account.screen.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaAccountView>
      <LogoView>
        <LogoImage />
      </LogoView>
      <GlobeView>
        <GlobeLottie>
          <PlaneView></PlaneView>
        </GlobeLottie>
      </GlobeView>
      <AccountOptionsView>
        <LoginButton
          onPress={() => {
            if (Platform.OS === "ios") {
              navigation.navigate("Apple Login");
            } else {
              navigation.navigate("Email Login");
            }
          }}
        />
        <SignUpButton
          onPress={() => {
            if (Platform.OS === "ios") {
              navigation.navigate("Apple Signup");
            } else {
              navigation.navigate("Email Signup");
            }
          }}
        />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
