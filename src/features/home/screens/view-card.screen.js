import React from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";

const ViewCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  const { property = defaultProperty, buttonsDisabled = false } = route.params;
  return (
    <BackgroundView>
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
    </BackgroundView>
  );
};

export default ViewCardScreen;
