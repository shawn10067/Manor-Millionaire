import { useQuery } from "@apollo/client";
import React from "react";
import { Platform } from "react-native";
import { Text } from "react-native-paper";
import { GET_SPIN_OUTCOME } from "../../../../graphql/queries";
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
  const { data, loading, error } = useQuery(GET_SPIN_OUTCOME);
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }
  if (data) {
    console.log("DATA CAME");
  }
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
        {data && <Text>{data.toString()}</Text>}
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
