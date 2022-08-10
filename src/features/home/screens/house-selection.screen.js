import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
import {
  ConfettiLottie,
  HouseLottie,
  LottieText,
  PaymentFailLottie,
  PaymentLottie,
  SparksLottie,
  TravelAnimationView,
  TravelLottie,
} from "../components/house-selection.styles";

const HouseSelectionScreen = ({ navigation }) => {
  const [cardFound, setCardFound] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [purchaseConfirmation, setPurchaseConfirmation] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);
  const [transactionError, setTransactionError] = useState(false);
  const { user, setUser } = useContext(UserContext);

  setTimeout(() => {
    setCardFound(true);
    setTimeout(() => {
      setAnimationDone(true);
    }, 2500);
  }, 3000);

  if (transactionError) {
    return (
      <BackgroundView>
        <SafeAreaView>
          <TravelAnimationView>
            <MoneyCounter />
            <PaymentFailLottie>
              <LottieText>Payment Error</LottieText>
            </PaymentFailLottie>
          </TravelAnimationView>
        </SafeAreaView>
      </BackgroundView>
    );
  }

  if (transactionLoading || purchaseConfirmation) {
    return (
      <BackgroundView>
        <SafeAreaView>
          <TravelAnimationView>
            <MoneyCounter />
            {transactionLoading ? (
              <PaymentLottie>
                <LottieText>Confirming Payment</LottieText>
              </PaymentLottie>
            ) : (
              <ConfettiLottie onTop>
                <HouseLottie loopStatus={false}>
                  <LottieText>Congratulations!</LottieText>
                </HouseLottie>
              </ConfettiLottie>
            )}
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
            <SafeAreaAbsoluteView>
              <MoneyCounter />
              <CardSwipeView
                onSwipeUp={() => {
                  setTransactionLoading(true);
                  setTimeout(() => {
                    setTransactionLoading(false);
                    setPurchaseConfirmation(true);
                    setUser({ ...user, cash: 130000000 });
                    // setTransactionError(true);

                    setTimeout(() => {
                      navigation.navigate("Home");
                    }, 8000);
                  }, 5000);
                }}
                upMessage="swipe to buy"
                onSwipeDown={() => {
                  navigation.navigate("Home");
                }}
                downMessage="decline"
              />
            </SafeAreaAbsoluteView>
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
