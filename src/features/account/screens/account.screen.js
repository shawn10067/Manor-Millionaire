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
          <PlaneView>
            <PlaneLottie>
              <CoinsLottie />
            </PlaneLottie>
          </PlaneView>
        </GlobeLottie>
      </GlobeView>
      <AccountOptionsView>
        <LoginButton
          onPress={() => {
            navigation.navigate("Apple Login");
          }}
        />
        <SignUpButton />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
