import React, { useContext, useState } from "react";
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

const UsernameScreen = ({ navigation }) => {
  const {
    createAccountMutation,
    setUserToken,
    firebaseIdToken,
    user,
    logout,
    userToken,
    loading,
  } = useContext(AuthenticationContext);
  const [error, setError] = useState(null);
  const usernameRef = useRef();
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

      setError(null);
    }
  };

  return (
    <BackgroundView>
      <SafeAreaView>
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
      </SafeAreaView>
    </BackgroundView>
  );
};

export default UsernameScreen;
