import React, { useContext, useEffect, useState } from "react";
import {
  BeachLottie,
  BeachLottieView,
  TextView,
  UsernameText,
  UsernameInputView,
} from "../components/username.screen.styles";
import RoundedTextInput from "../../../components/RoundedTextInput";
import RoundedButton from "../../../components/RoundedButton";
import BackgroundView from "../../../components/BackgroundView";
import { LoginErrorText } from "../../account/components/login.email.screen.styles";
import SafeAreaView from "../../../components/SafeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getAuth } from "firebase/auth";
import { useRef } from "react";
import AnimationFadeInOut from "../../../components/AnimationFadeInOut";
import styled from "styled-components/native";
import { BackHandler } from "react-native";

const UsernameAnimated = styled(AnimationFadeInOut)`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const UsernameAnimatedView = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const UsernameScreen = ({ navigation }) => {
  const [error, setError] = useState(null);
  const usernameRef = useRef();
  const {
    createAccountMutation,
    firebaseIdToken,
    loading,
    user,
    createAccountCalled,
    createData,
  } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) {
      if (createAccountCalled === false) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Tutorial");
      }
    }
  }, [user, createAccountCalled, createData]);
  // function to create database user
  const onUsernameSubmit = async () => {
    if (!usernameRef.current) {
      setError({ message: "Username is required" });
    } else {
      // only for debugging
      const uid = getAuth().currentUser.uid;
      console.log("uid", uid);

      // simply calling the mutation
      createAccountMutation({
        variables: {
          username: usernameRef.current,
          firebaseId: firebaseIdToken,
        },
      });
    }
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <UsernameAnimated>
          <UsernameAnimatedView>
            <BeachLottieView>
              <BeachLottie />
            </BeachLottieView>
            <TextView>
              <UsernameText>What shall we call you?</UsernameText>
            </TextView>
            <UsernameInputView>
              <RoundedTextInput
                borderColour="red"
                placeholder="username"
                onChange={(val) => (usernameRef.current = val)}
              />
              {error && <LoginErrorText>{error.message}</LoginErrorText>}
              <RoundedButton
                colour="red"
                text="Submit"
                onPress={onUsernameSubmit}
                loading={loading}
              />
            </UsernameInputView>
          </UsernameAnimatedView>
        </UsernameAnimated>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default UsernameScreen;
