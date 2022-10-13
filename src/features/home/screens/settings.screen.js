import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import RoundedButton from "../../../components/RoundedButton";
import { UserContext } from "../../../services/user/user.context";
import { Image } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import BackgroundBlackView from "../../../components/BackgroundBlackView";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoView = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UsernameView = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
`;

const UsernameText = styled.Text`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
`;

const ButtonsView = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LogoutButton = styled(RoundedButton).attrs({
  colour: "red",
  text: "Logout",
})`
  width: 70%;
  height: 70px;
`;

const SoundButton = styled(RoundedButton).attrs({
  colour: "green",
})`
  width: 70%;
  height: 70px;
`;

const CardTutorialButton = styled(RoundedButton).attrs({
  colour: "blue",
  text: "Card Tutorial",
})`
  width: 70%;
  height: 70px;
`;

const Logo = styled(Image).attrs({
  source: require("../../../../assets/logo.png"),
  resizeMode: "contain",
})`
  height: 75%;
  width: 90%;
`;

const SettingsScreen = ({ navigation }) => {
  const [soundSetting, setSoundSettings] = useState(true);
  const { logout, user } = useContext(AuthenticationContext);

  const onLogout = () => {
    logout();
  };

  const onSoundPress = () => {
    setSoundSettings(!soundSetting);
  };

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainView>
          <LogoView>
            <Logo />
          </LogoView>
          <UsernameView>
            <UsernameText>{user.username}</UsernameText>
          </UsernameView>
          <ButtonsView>
            <SoundButton
              onPress={onSoundPress}
              text={soundSetting ? "Sound: on" : "Sound: off"}
            />

            <CardTutorialButton
              onPress={() => navigation.navigate("Tutorial", { picture: true })}
              fontSize={33}
            />
            <LogoutButton onPress={onLogout} />
          </ButtonsView>
        </MainView>
        <BackArrowPressable onPress={() => navigation.navigate("Home")} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default SettingsScreen;
