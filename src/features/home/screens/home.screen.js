import React, { useContext, useEffect, useRef, useState } from "react";
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
import { Dimensions, FlatList, Platform, Pressable, View } from "react-native";
import BlurBlackViewComponent from "../../../components/BlurBlackViewComponent";
const { height } = Dimensions.get("window");
const BlurBarHeight = 250;
const CountrySelectionPosition = height - BlurBarHeight;
import {
  getCountryProperties,
  countryProperties,
} from "../../../utils/countryDecorations";
import { Button, Divider, Menu, Provider, Text } from "react-native-paper";
import RoundedButtonContainer from "../../../components/RoundedButtonContainer";
import { VibrancyView } from "@react-native-community/blur";
import CustomLinearGradient from "../../../components/gradient/CustomLinearGradient";
import LinearGradient from "react-native-linear-gradient";
import { presetColors } from "../../../components/gradient/CustomLinearGradient";
import Animated, { SlideInDown, SlideOutUp } from "react-native-reanimated";
import { CardHeadingText } from "../../../components/styles/card.styles";

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
  height: 65px;
  width: 100px;
  margin: 4px;
`;

const PropertiesButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "home-edit-outline",
  colour: "blue",
})`
  height: 65px;
  width: 100px;
  margin: 4px;
`;

const FriendsButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "account-group",
  colour: "red",
})`
  height: 65px;
  width: 100px;
  margin: 4px;
`;

const SettingsIcon = styled(Icon).attrs({
  name: "account-cog",
  color: "white",
  size: 50,
})`
  position: absolute;
  top: 55px;
  left: 15px;
`;

const PlayContainer = styled(RoundedButtonContainer).attrs({
  colour: "white",
  vibrant: true,
})`
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 165px;
`;

export const MenuHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 14px;
  font-family: FuturaPTHeavy;
`;

const BlurBar = styled(BlurBlackViewComponent).attrs({
  light: false,
})`
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
  justify-content: space-between;
  align-items: center;
`;

const IconsVerticalTray = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: blue;
`;

const SpinButtonView = styled.View`
  flex: 1.2;
  justify-content: flex-start;
  align-items: center;
`;

const CountrySelectionView = styled(BlurBlackViewComponent).attrs({})`
  align-self: center;
  position: absolute;
  top: 50px;
  width: 200px;
  height: 60px;
  border-radius: 20px;
`;

const CountrySelectionFlatListView = styled(BlurBlackViewComponent).attrs({
  animate: false,
})`
  align-self: center;
  position: absolute;
  top: 120px;
  width: 200px;
  height: 160px;
  border-radius: 20px;
  overflow: hidden;
`;

const CountrySelectionPicker = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const CountryText = styled.Text`
  font-family: "FuturaPTHeavy";
  font-size: 18px;
  color: ${({ theme }) => theme.colours.main.white};
`;

const CountrySelectionPressable = styled(Pressable)`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const HomeScreen = ({ navigation }) => {
  const [countrySelection, setCountrySelection] = useState("canada");
  const [open, setOpen] = useState(false);
  const { setBankruptTrade } = useContext(BankruptcyContext);
  const mapRef = useRef(null);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );

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
      label: `${key.toLocaleUpperCase()}  ${countryProperties[key].emoji}`,
      value: key,
    };
  });

  const { coordinates } = countryProperties[countrySelection];
  const { latitude, longitude, latitudeDelta, longitudeDelta } = coordinates;
  const animateRegion = {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };

  useEffect(() => {
    mapRef.current && mapRef.current.animateToRegion(animateRegion, 1500);
  }, [countrySelection]);

  const renderCountrySelection = ({ item }) => {
    const { label, value } = item;
    return (
      <BlurBlackViewComponent animate={false} light={false}>
        <CountrySelectionPressable
          onPress={() => {
            setOpen(false);
            setCountrySelection(value);
          }}
        >
          <CountryText>{label}</CountryText>
        </CountrySelectionPressable>
      </BlurBlackViewComponent>
    );
  };

  // for some reason, big lottie files slow down the app

  // TODO: put an animated linear gradient underneath the play button

  return (
    <Provider>
      <BackgroundView>
        <CustomMapView
          mapRef={mapRef}
          animateRegion={animateRegion}
          setOpen={setOpen}
        />
        <SettingsIcon onPress={() => navigation.navigate("Settings")} />

        <CountrySelectionView animate={false}>
          <Pressable onPress={() => setOpen(!open)} style={{ flex: 1 }}>
            <CountrySelectionPicker>
              <CountryText>{`${countrySelection.toLocaleUpperCase()} ${
                countryProperties[countrySelection].emoji
              }`}</CountryText>
              <Icon
                size={25}
                name={
                  open
                    ? "arrow-up-drop-circle-outline"
                    : "arrow-down-drop-circle-outline"
                }
                color={theme.colours.main.white}
              />
            </CountrySelectionPicker>
          </Pressable>
        </CountrySelectionView>
        {open && (
          <CountrySelectionFlatListView>
            <FlatList
              style={{ flex: 1 }}
              data={mappedCountryValues}
              keyExtractor={(val) => val.value}
              renderItem={renderCountrySelection}
            />
          </CountrySelectionFlatListView>
        )}
        <BlurBar>
          <AnimationFadeInOut>
            <IconsTray>
              <CenterView>
                <TradeButtonIcon
                  onPress={() => navigation.navigate("Trade Options")}
                />
                <MenuHeadingText>Trade</MenuHeadingText>
              </CenterView>
              <CenterView>
                <PropertiesButtonIcon
                  onPress={() => navigation.navigate("View Properties")}
                />

                <MenuHeadingText>Properties</MenuHeadingText>
              </CenterView>
              <CenterView>
                <FriendsButtonIcon
                  onPress={() => navigation.navigate("Friends Options")}
                />
                <MenuHeadingText>Friends</MenuHeadingText>
              </CenterView>
            </IconsTray>
            <SpinButtonView>
              <PlayContainer>
                <CustomLinearGradient
                  style={{
                    flex: 1,
                    width: "100%",
                  }}
                >
                  <Icon
                    name="controller-classic"
                    size={65}
                    color="white"
                    style={{ textAlign: "center" }}
                  />
                </CustomLinearGradient>
              </PlayContainer>
            </SpinButtonView>
          </AnimationFadeInOut>
        </BlurBar>
      </BackgroundView>
    </Provider>
  );
};

export default HomeScreen;
