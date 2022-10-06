import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AnimationFadeInOut from "../../../components/AnimationFadeInOut";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import theme from "../../../infrastructure/theme";
import {
  CenterView,
  FriendsButton,
  IconView,
  MapContentView,
  MapLottie,
  MenuView,
  PropertiesButton,
  SpinRoundedButton,
  TradeButton,
} from "../components/home.screen.styles";
import MapView from "react-native-maps";
import SpinButtonProgressBar from "../../../components/SpinButtonProgressBar";
import { SpinContext } from "../../../services/spin/spin.context";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
import styled from "styled-components/native";
import RoundedButtonIcon from "../../../components/RoundedButtonIcon";
import CustomMapView from "../../../components/CustomMapView";
import RoundedButton from "../../../components/RoundedButton";
import { Dimensions } from "react-native";
import BlurBlackViewComponent from "../../../components/BlurBlackViewComponent";
const { height } = Dimensions.get("window");
const BlurBarHeight = 238;
const CountrySelectionPosition = height - BlurBarHeight;
import {
  getCountryProperties,
  countryProperties,
} from "../../../utils/countryDecorations";
import DropDownPicker from "react-native-dropdown-picker";

const SpinButton = styled(RoundedButton).attrs({
  text: "SPIN",
  colour: "grey",
})`
  height: 70px;
  width: 185px;
`;

const TradeButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "cube-send",
  colour: "purple",
})`
  height: 60px;
  width: 60px;
`;

const BankruptsyButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "bank-transfer",
  colour: "green",
})`
  height: 60px;
  width: 60px;
`;

const FriendsButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "account-group",
  colour: "red",
})`
  height: 60px;
  width: 60px;
`;

const PropertiesButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "home-edit-outline",
  colour: "blue",
})`
  height: 60px;
  width: 60px;
`;

const BlurBar = styled(BlurBlackViewComponent)`
  width: 100%;
  height: ${BlurBarHeight}px;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const IconsTray = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const SpinButtonView = styled.View`
  flex: 1.5;
  justify-content: flex-start;
  align-items: center;
`;

const CountrySelectionView = styled(BlurBlackViewComponent)`
  align-self: center;
  position: absolute;
  top: 50px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
`;

const CountrySelectionPicker = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const CountryText = styled.Text`
  font-family: "FuturaPTHeavy";
  font-size: 20px;
  color: ${({ theme }) => theme.colours.main.white};
`;

const HomeScreen = ({ navigation }) => {
  const [countrySelection, setCountrySelection] = useState("canada");
  const { setBankruptTrade } = useContext(BankruptcyContext);

  const { nextSpinTime, previousSpinTime, hasSpun } = useContext(SpinContext);
  const onSpinPress = () => {
    // TODO: update spin pressed when user is done the whole spin process
    console.log("spin pressed");

    // in reality, update this state when spin flow is done (finish later)
    navigation.navigate("Spin Idle Screen");
    console.log(countryProperties);
  };

  const mappedCountryValues = Object.keys(countryProperties).map((key) => {
    return {
      label: `${key}  ${countryProperties[key].emoji}`,
      value: key,
    };
  });
  const [items, setItems] = useState(mappedCountryValues);
  const [open, setOpen] = useState(false);

  return (
    <BackgroundView>
      <CustomMapView />
      <CountrySelectionView />
      <CountrySelectionView>
        <CountrySelectionPicker>
          <Icon
            size={30}
            name="arrow-down-drop-circle-outline"
            color={theme.colours.main.white}
          />
        </CountrySelectionPicker>
      </CountrySelectionView>
      <BlurBar>
        <AnimationFadeInOut>
          <IconsTray>
            <TradeButtonIcon
              onPress={() => navigation.navigate("Trade Options")}
            />
            <BankruptsyButtonIcon />
            <FriendsButtonIcon
              onPress={() => navigation.navigate("Friends Options")}
            />
            <PropertiesButtonIcon
              onPress={() => navigation.navigate("View Properties")}
            />
          </IconsTray>
          <SpinButtonView>
            <SpinButton />
          </SpinButtonView>
        </AnimationFadeInOut>
      </BlurBar>
    </BackgroundView>
  );
};

/* the former menu
<Icon
            size={30}
            name="arrow-down-drop-circle-outline"
            color={theme.colours.main.white}
          />

            <AnimationFadeInOut>
              <CenterView style={{ backgroundColor: "blue" }}>
                <TradeButton
                  fontSize={30}
                />
                <FriendsButton
                  fontSize={30}
                />
                <PropertiesButton
                  text="Properties"
                  colour="red"
                  fontSize={30}
                />
              </CenterView>
            </AnimationFadeInOut>
            */

export default HomeScreen;
