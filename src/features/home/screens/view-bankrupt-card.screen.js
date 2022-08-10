import React, { useContext } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";

const ViewBankruptCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  const { property = defaultProperty } = route.params;

  // replace with new context
  const { bankruptTrade, setBankruptTrade } = useContext(BankruptcyContext);

  // replace with bankrupt trade context
  const isPartOfTrade = bankruptTrade.properties.find(
    (propertyElement) => propertyElement.id === property.id
  );

  // replace with bankrupt trade context
  const addToTrade = () => {
    if (isPartOfTrade) {
      const removedFromProperties = bankruptTrade.properties.filter(
        (val) => val.id != property.id
      );
      setBankruptTrade({
        ...bankruptTrade,
        properties: removedFromProperties,
      });
    } else {
      setBankruptTrade({
        ...bankruptTrade,
        properties: [...bankruptTrade.properties, property],
      });
    }
    navigation.goBack();
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <SafeAreaAbsoluteView>
          <MoneyCounter />
          <CardSwipeView
            swipeDown={true}
            swipeUp={true}
            onSwipeDown={cardSwipeFunc}
            onSwipeUp={addToTrade}
            downMessage="back"
            upMessage={isPartOfTrade ? "keep" : "sell"}
            property={property}
          />
        </SafeAreaAbsoluteView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default ViewBankruptCardScreen;
