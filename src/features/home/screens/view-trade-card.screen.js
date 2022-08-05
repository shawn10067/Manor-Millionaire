import React, { useContext } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { TradeContext } from "../../../services/trade/trade.context";

const ViewTradeCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  const { property = defaultProperty, addType = "me" } = route.params;
  const { trade, setTrade } = useContext(TradeContext);
  const isPartOfTrade =
    trade.myProperties.find(
      (propertyElement) => propertyElement.id === property.id
    ) ||
    trade.theirProperties.find(
      (propertyElement) => propertyElement.id === property.id
    );

  const addToTrade = () => {
    if (addType === "me") {
      if (isPartOfTrade) {
        const removedFromProperties = trade.myProperties.filter(
          (val) => val.id != property.id
        );
        setTrade({
          ...trade,
          myProperties: removedFromProperties,
        });
      } else {
        setTrade({
          ...trade,
          myProperties: [...trade.myProperties, property],
        });
      }
    } else {
      if (isPartOfTrade) {
        const removedFromProperties = trade.theirProperties.filter(
          (val) => val.id != property.id
        );
        setTrade({
          ...trade,
          theirProperties: removedFromProperties,
        });
      } else {
        setTrade({
          ...trade,
          theirProperties: [...trade.theirProperties, property],
        });
      }
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
            upMessage={isPartOfTrade ? "remove from deal" : "add to deal"}
            property={property}
          />
        </SafeAreaAbsoluteView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default ViewTradeCardScreen;
