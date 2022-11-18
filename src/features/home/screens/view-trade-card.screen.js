import React, { useContext } from "react";
import BackgroundView from "../../../components/BackgroundView";
import CardSwipeView from "../../../components/CardSwipeView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaAbsoluteView from "../../../components/SafeAreaAbsoluteView";
import SafeAreaView from "../../../components/SafeAreaView";
import { defaultProperty } from "../../../services/property/property.service";
import { TradeContext } from "../../../services/trade/trade.context";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import { useTradeStore } from "../../../services/trade/trade.store";

const ViewTradeCardScreen = ({ route, navigation }) => {
  const cardSwipeFunc = () => setTimeout(() => navigation.goBack(), 300);
  // TODO: remove this "default property" in production so people don't glitch it
  const { property = defaultProperty, addType = "me" } = route.params;
  const { trade, setTrade } = useContext(TradeContext);
  const isPartOfTrade =
    trade.myProperties.find(
      (propertyElement) => propertyElement.id === property.id
    ) ||
    trade.theirProperties.find(
      (propertyElement) => propertyElement.id === property.id
    );

  const {
    addMyProperty,
    removeMyProperty,
    removeTheirProperty,
    addTheirProperty,
  } = useTradeStore((state) => ({
    addMyProperty: state.addMyProperty,
    removeMyProperty: state.removeMyProperty,
    addTheirProperty: state.addTheirProperty,
    removeTheirProperty: state.removeTheirProperty,
  }));

  const addToTrade = () => {
    if (addType === "me") {
      if (isPartOfTrade) {
        removeMyProperty(property);
        const removedFromProperties = trade.myProperties.filter(
          (val) => val.id != property.id
        );
        setTrade({
          ...trade,
          myProperties: removedFromProperties,
        });
      } else {
        addMyProperty(property);
        setTrade({
          ...trade,
          myProperties: [...trade.myProperties, property],
        });
      }
    } else {
      if (isPartOfTrade) {
        removeTheirProperty(property);
        const removedFromProperties = trade.theirProperties.filter(
          (val) => val.id != property.id
        );
        setTrade({
          ...trade,
          theirProperties: removedFromProperties,
        });
      } else {
        addTheirProperty(property);
        setTrade({
          ...trade,
          theirProperties: [...trade.theirProperties, property],
        });
      }
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
            upMessage={isPartOfTrade ? "remove from deal" : "add to deal"}
            property={property}
          />
        </SafeAreaAbsoluteView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewTradeCardScreen;
