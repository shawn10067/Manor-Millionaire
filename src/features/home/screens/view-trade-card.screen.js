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

  const addToTrade = () => {
    if (addType === "me") {
      setTrade({
        ...trade,
        myProperties: [...trade.myProperties, property],
      });
    } else {
      setTrade({
        ...trade,
        theirProperties: [...trade.theirProperties, property],
      });
    }
    console.log("trade is", trade);
    navigation.goBack();
  };
  const isPartOfTrade = trade.myProperties.find(
    (propertyElement) => propertyElement.id === property.id
  );

  return (
    <BackgroundView>
      <SafeAreaView>
        <SafeAreaAbsoluteView>
          <MoneyCounter />
          <CardSwipeView
            swipeDown={true}
            swipeUp={!isPartOfTrade && true}
            onSwipeDown={cardSwipeFunc}
            onSwipeUp={addToTrade}
            downMessage="back"
            upMessage="add to deal"
            property={property}
          />
        </SafeAreaAbsoluteView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default ViewTradeCardScreen;
