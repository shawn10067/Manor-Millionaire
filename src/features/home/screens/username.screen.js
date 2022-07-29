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

const UsernameScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
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
          <RoundedTextInput borderColour="red" placeholder="username" />
          {error && <LoginErrorText>{error}</LoginErrorText>}
          <RoundedButton
            colour="red"
            text="Submit"
            onPress={() => {
              setUser({ ...user, hasUsername: true, hasHouse: false });
              navigation.navigate("Tutorial");
            }}
          />
        </UsernameInputView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default UsernameScreen;
