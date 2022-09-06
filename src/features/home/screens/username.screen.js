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
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../../../graphql/mutations";
import { useRef } from "react";
import { useEffect } from "react";

const UsernameScreen = ({ navigation }) => {
  const { setUserToken, firebaseIdToken, user, logout, userToken } = useContext(
    AuthenticationContext
  );
  const [error, setError] = useState(null);
  const usernameRef = useRef();

  // lazy query for signing up
  const [createAccountMutation, { data, loading, error: createAccountError }] =
    useMutation(CREATE_ACCOUNT);

  // useeffect for createAccountError
  useEffect(() => {
    if (createAccountError) {
      setError(createAccountError);
    }
  }, [createAccountError]);

  // if we successfully created an account
  if (data) {
    console.log("GOT THE FUCKING DATA", data);
    setUserToken(data.signUp);
  }

  console.log("FUCKING FIREBASE", `firebaseIdToken: "${firebaseIdToken}"`);

  // function to create database user
  const onUsernameSubmit = async () => {
    if (!usernameRef.current) {
      setError({ message: "Username is required" });
    } else {
      setError(null);
      // only for debugging
      const uid = getAuth().currentUser.uid;
      console.log("uid", uid);

      // simply calling the mutation
      console.log("firebaseID", firebaseIdToken);
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
          />
        </UsernameInputView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default UsernameScreen;
