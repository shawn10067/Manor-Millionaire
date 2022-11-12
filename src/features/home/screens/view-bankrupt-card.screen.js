import React, { useContext } from "react";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
import BackgroundBlackView from "../../../components/BackgroundBlackView";

const ViewBankruptCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  const { property = defaultProperty } = route.params;

  // replace with new context
  const { bankruptTrade, setBankruptTrade } = useContext(BankruptcyContext);

  console.log(
    "rendering ViewBankruptCardScreen with ",
    bankruptTrade,
    property
  );

  // replace with bankrupt trade context
  const isPartOfTrade = bankruptTrade?.properties?.includes(property.id);

  // replace with bankrupt trade context
  const addToTrade = () => {
    if (isPartOfTrade) {
      const removedFromProperties = bankruptTrade?.properties?.filter(
        (val) => val.id != property.id
      );
      setBankruptTrade({
        ...bankruptTrade,
        properties: removedFromProperties,
      });
    } else {
      console.log("adding to trade", bankruptTrade);
      setBankruptTrade({
        ...bankruptTrade,
        properties: bankruptTrade.properties
          ? [...bankruptTrade.properties, property]
          : [property],
      });
    }
    navigation.goBack();
  };

  return (
    <BackgroundBlackView>
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
    </BackgroundBlackView>
  );
};

export default ViewBankruptCardScreen;
