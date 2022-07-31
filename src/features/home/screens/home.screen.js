import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NotiIcon from "react-native-vector-icons/MaterialIcons";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import {
  CenterView,
  MapLottie,
  MapView,
  MenuView,
  PropertiesButton,
  SpinButton,
  TradeButton,
} from "../components/home.screen.styles";

const HomeScreen = ({ navigation }) => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <MapView>
          <MenuView>
            <Icon name="menu" size={60} color={theme.colours.main.blue} />
            <NotiIcon name="notifications" size={60} color="yellow" />
          </MenuView>
          <MoneyCounter />
          <MapLottie
            source={require("../../../../assets/globe.json")}
            speed={0.5}
          >
            <CenterView>
              <PropertiesButton
                text="View Properties"
                colour="red"
                fontSize={25}
                onPress={() => navigation.navigate("View Properties")}
              />
              <TradeButton fontSize={30} />
            </CenterView>
          </MapLottie>
          <SpinButton />
        </MapView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
