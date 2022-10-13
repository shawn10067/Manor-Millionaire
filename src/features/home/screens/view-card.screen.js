import React from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import BackgroundBlackView from "../../../components/BackgroundBlackView";

const ViewCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  const { property, buttonsDisabled = false } = route.params;
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <SafeAreaAbsoluteView>
          <MoneyCounter />
          <CardSwipeView
            swipeDown={true}
            swipeUp={false}
            onSwipeDown={cardSwipeFunc}
            downMessage="back"
            property={property}
            buttonsDisabled={buttonsDisabled}
          />
        </SafeAreaAbsoluteView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewCardScreen;
