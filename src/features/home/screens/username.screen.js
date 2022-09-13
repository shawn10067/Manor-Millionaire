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
import { useLazyQuery, useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../../../graphql/mutations";
import { useRef } from "react";
import { useEffect } from "react";
import { USER_EXISTS } from "../../../../graphql/queries";
import { createErrorObject } from "../../../utils/errorHandlers";

const UsernameScreen = ({ navigation }) => {
  const { setUserToken, firebaseIdToken, user, logout, userToken } = useContext(
    AuthenticationContext
  );
  const [error, setError] = useState(null);
  const [gotUser, setGotUser] = useState(false);
  const usernameRef = useRef();

  // queries
  const [createAccountMutation, { data, loading, error: createAccountError }] =
    useMutation(CREATE_ACCOUNT, {
      onCompleted: (completeData) => {
        console.log("got creation data", completeData);
      },
    });
  const [
    checkIfUserExists,
    { data: checkData, loading: checkLoading, error: checkError },
  ] = useLazyQuery(USER_EXISTS, {
    onCompleted: (completeData) => {
      console.log("got existance data", completeData);
    },
  });

  // error use effects --------
  useEffect(() => {
    if (createAccountError) {
      ("error occured");
      setError(createErrorObject(createAccountError));
    }
  }, [createAccountError]);
  useEffect(() => {
    if (checkError) {
      ("error occured");
      setError(createErrorObject(checkError));
    }
  }, [checkError]);
  // end of effects --------

  // if we got the status of the user
  useEffect(() => {
    if (checkData && !gotUser) {
      console.log("data to check for existing user", checkData);
      setGotUser(true);
      //navigation.navigate("Home");
    }
  }, [checkData, gotUser]);

  // if we successfully created an account
  useEffect(() => {
    if (data && !gotUser) {
      console.log("user creation data recieved", data);
      if (!userToken) {
        setUserToken(data.signUp);
      }
      checkIfUserExists({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [data, gotUser]);

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
            loading={checkLoading || loading}
          />
        </UsernameInputView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default UsernameScreen;
