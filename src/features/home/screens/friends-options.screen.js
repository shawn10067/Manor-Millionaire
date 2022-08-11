import React from "react";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";

const FriendsOptionsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FriendsLottieContainer = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OptionsContainer = styled.View`
  flex: 0.5;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const FriendsLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/friends.json"),
})`
  width: 100%;
  height: 100%;
`;

const OptionButton = styled(RoundedButton).attrs({
  fontSize: 25,
})`
  height: 70px;
  width: 55%;
`;

const FriendsOptionsScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <FriendsOptionsView>
          <FriendsLottieContainer>
            <FriendsLottie />
          </FriendsLottieContainer>
          <OptionsContainer>
            <OptionButton
              text="View Friends"
              colour="red"
              onPress={() => navigation.navigate("View Friends")}
            />
            <OptionButton
              text="View Requests"
              colour="blue"
              onPress={() => navigation.navigate("View Friend Requests")}
            />
            <OptionButton
              text="Add Friends"
              colour="green"
              onPress={() => navigation.navigate("View Trades")}
            />
          </OptionsContainer>
        </FriendsOptionsView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default FriendsOptionsScreen;
