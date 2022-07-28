import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
import {
  SparksLottie,
  TravelAnimationView,
  TravelLottie,
} from "../components/house-selection.styles";

const HouseSelectionScreen = ({ navigation }) => {
  const [cardFound, setCardFound] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  setTimeout(() => {
    setCardFound(true);
    setTimeout(() => {
      setAnimationDone(true);
    }, 2500);
  }, 3000);

  if (transactionLoading) {
    return (
      <BackgroundView>
        <SafeAreaView>
          <TravelAnimationView>
            <MoneyCounter />
          </TravelAnimationView>
        </SafeAreaView>
      </BackgroundView>
    );
  }

  return (
    <BackgroundView>
      <SafeAreaView>
        {cardFound ? (
          animationDone ? (
            <SafeAreaView>
              <MoneyCounter />
              <CardSwipeView
                onSwipeUp={() => {
                  setUser({ ...user, cash: 130000000000 });
                  navigation.navigate("Home");
                }}
                swipeDown={false}
                upMessage="swipe to buy"
              />
            </SafeAreaView>
          ) : (
            <SparksLottie onTop={true} loopStatus={false} speed={0.5} />
          )
        ) : (
          <TravelAnimationView>
            <TravelLottie />
          </TravelAnimationView>
        )}
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HouseSelectionScreen;
