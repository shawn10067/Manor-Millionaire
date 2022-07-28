import React, { useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  SparksLottie,
  TravelAnimationView,
  TravelLottie,
} from "../components/house-selection.styles";

const HouseSelectionScreen = ({ navigation }) => {
  const [cardFound, setCardFound] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  setTimeout(() => {
    setCardFound(true);
    setTimeout(() => {
      setAnimationDone(true);
    }, 2500);
  }, 3000);

  return cardFound ? (
    <>
      {animationDone ? (
        <>
          <CardSwipeView
            onSwipeUp={() => {
              navigation.navigate("Home");
            }}
            swipeDown={false}
            upMessage="swipe to buy"
          />
        </>
      ) : (
        <BackgroundView>
          <SafeAreaView>
            <SparksLottie onTop={true} loopStatus={false} speed={0.5} />
          </SafeAreaView>
        </BackgroundView>
      )}
    </>
  ) : (
    <BackgroundView>
      <SafeAreaView>
        <TravelAnimationView>
          <TravelLottie />
        </TravelAnimationView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HouseSelectionScreen;
