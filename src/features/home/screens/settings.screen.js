import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import RoundedButton from "../../../components/RoundedButton";
import { UserContext } from "../../../services/user/user.context";
import { LogoImage } from "../../account/components/account.screen.styles";
import { Image } from "react-native";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LogoView = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
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

const Logo = styled(Image).attrs({
  source: require("../../../../assets/logo.png"),
  resizeMode: "contain",
})`
  height: 75%;
  width: 90%;
`;

const SettingsScreen = ({ navigation }) => {
  const [soundSetting, setSoundSettings] = useState(true);
  const { setUser } = useContext(UserContext);

  const onLogout = () => {
    navigation.navigate("Home");
    setUser(null);
  };

  const onSoundPress = () => {
    setSoundSettings(!soundSetting);
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <MainView>
          <LogoView>
            <LogoImage />
          </LogoView>
          <UsernameView>
            <UsernameText>Guraryan69</UsernameText>
          </UsernameView>
          <ButtonsView>
            <SoundButton
              onPress={onSoundPress}
              text={soundSetting ? "Sound: on" : "Sound: off"}
            />
            <LogoutButton onPress={onLogout} />
          </ButtonsView>
        </MainView>
        <BackArrowPressable onPress={() => navigation.navigate("Home")} />
      </SafeAreaView>
    </BackgroundView>
  );
};

export default SettingsScreen;
