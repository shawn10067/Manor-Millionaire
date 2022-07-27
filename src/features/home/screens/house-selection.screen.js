import React, { useEffect, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  SparksLottie,
  TravelAnimationView,
  TravelLottie,
  TravelText,
  TravelTextView,
} from "../components/house-selection.styles";

const HouseSelectionScreen = () => {
  const [cardFound, setCardFound] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  setTimeout(() => {
    setCardFound(true);
    setTimeout(() => {
      setAnimationDone(true);
    }, 2500);
  }, 3000);

  return cardFound ? (
    <BackgroundView>
      <SafeAreaView>
        {animationDone ? (
          <TravelTextView>
            <RoundedButton text={"Yur"} />
            <TravelText>Found card</TravelText>
          </TravelTextView>
        ) : (
          <SparksLottie onTop={true} loopStatus={false} speed={0.5} />
        )}
      </SafeAreaView>
    </BackgroundView>
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
