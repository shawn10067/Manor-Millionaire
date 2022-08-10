import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import LottieAnimation from "../../../components/LottieAnimation";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";

const PlaneLandingLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/plane-landing.json"),
})`
  height: 100%;
  width: 100%;
`;

const RiskLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/risk.json"),
})`
  height: 100%;
  width: 100%;
`;

const LandedPropertyScreen = ({ navigation }) => {
  const [animationDone, setAnimationDone] = useState(false);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
      setTimeout(() => {
        setUser({
          ...user,
          cash: user.cash - 20000000,
        });
      }, 2500);
    }, 3000);
  }, []);

  return (
    <BackgroundView>
      <SafeAreaView>
        {animationDone ? (
          <SafeAreaAbsoluteView>
            <MoneyCounter />
            <CardSwipeView
              swipeUp={false}
              onSwipeDown={() => {
                setTimeout(() => {
                  if (user.cash < 0) {
                    navigation.navigate("Bankruptcy Options");
                  } else {
                    navigation.navigate("Home");
                  }
                }, 500);
              }}
              downMessage="back"
            />
          </SafeAreaAbsoluteView>
        ) : (
          <RiskLottie onTop={true} loopStatus={false} speed={0.5} />
        )}
      </SafeAreaView>
    </BackgroundView>
  );
};

export default LandedPropertyScreen;
