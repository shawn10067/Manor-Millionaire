import React from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { CenterView } from "../../home/components/home.screen.styles";

const AccountScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <CenterView>
          <RoundedButton text={"Hello World"} colour="blue" fontSize={30} />
        </CenterView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default AccountScreen;
