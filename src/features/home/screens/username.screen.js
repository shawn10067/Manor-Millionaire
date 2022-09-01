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
import { UserContext } from "../../../services/user/user.context";
import { LoginErrorText } from "../../account/components/login.email.screen.styles";
import SafeAreaView from "../../../components/SafeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getAuth } from "firebase/auth";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../../../graphql/mutations";
import { useRef } from "react";
import { useEffect } from "react";

const UsernameScreen = ({ navigation }) => {
  const { setUser: setAuthUser } = useContext(AuthenticationContext);
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

  // function to create database user
  const onUsernameSubmit = async () => {
    if (!usernameRef.current) {
      setError({ message: "Username is required" });
    } else {
      console.log("submitting username", usernameRef.current);
      const token = await getAuth().currentUser.getIdToken();
      createAccountMutation({
        variables: {
          username: usernameRef.current,
          firebaseId: token,
        },
      });

      if (data) {
        // get auth token and create account, and then navigate
        console.log("data", data);
        setError(null);
        //setUser({ ...user, hasUsername: true });
        //setAuthUser(createdAccount);
        //navigation.navigate("Tutorial");
      } else {
        console.log(data);
      }
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
