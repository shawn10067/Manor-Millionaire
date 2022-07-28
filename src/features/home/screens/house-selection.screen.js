import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
import {
  ConfettiLottie,
  HouseLottie,
  LottieText,
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
            <PaymentLottie>
              <LottieText>Error</LottieText>
            </PaymentLottie>
          </TravelAnimationView>
        </SafeAreaView>
      </BackgroundView>
    );
  }

  if (purchaseConfirmation) {
    return (
      <BackgroundView>
        <SafeAreaView>
          <TravelAnimationView>
            <ConfettiLottie onTop>
              <HouseLottie>
                <LottieText>Congratulations!</LottieText>
              </HouseLottie>
            </ConfettiLottie>
          </TravelAnimationView>
        </SafeAreaView>
      </BackgroundView>
    );
  }

  if (transactionLoading) {
    return (
      <BackgroundView>
        <SafeAreaView>
          <TravelAnimationView>
            <PaymentLottie>
              <LottieText>Confirming Payment</LottieText>
            </PaymentLottie>
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
                  setTransactionLoading(true);
                  setTimeout(() => {
                    setTransactionLoading(true);
                    setPurchaseConfirmation(true);
                    setTimeout(() => {
                      navigation.navigate("Home");
                    }, 3000);
                  }, 3000);
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
