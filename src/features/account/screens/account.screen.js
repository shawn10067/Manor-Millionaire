import { useQuery } from "@apollo/client";
import React from "react";
import { Platform } from "react-native";
import { Text } from "react-native-paper";
import { GET_SPIN_OUTCOME } from "../../../../graphql/queries";
import SafeAreaAccountView from "../../../components/SafeAreaAccountView";
import {
  AccountOptionsView,
  GlobeLottie,
  GlobeView,
  LoginButton,
  LogoImage,
  LogoView,
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
        <SignUpButton
          onPress={() => {
            Platform.OS === "ios"
              ? navigation.navigate("Apple Signup")
              : navigation.navigate("Email Signup");
          }}
        />
        <LoginButton
          onPress={() => {
            Platform.OS === "ios"
              ? navigation.navigate("Apple Login")
              : navigation.navigate("Email Login");
          }}
        />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
