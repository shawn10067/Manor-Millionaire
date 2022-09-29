
type ParsedTrade {
  theirUsername: string;
  theirCash: number;
  theirProperties: string[];
  myUsername: string;
  myCash: number;
  myProperties: string[];
}

const parseTrade = (trade, isView: boolean) => {
  if (isView) {
    return {
      theirUsername: trade.recievingUsername,
      theirCash: trade.recievingCash,
      theirProperties: trade.recievingProperties,
      myUsername: trade.theirUsername,
      myCash: trade.myCash,
      myProperties: trade.myProperties,
    };
  } else {
    return {
      theirUsername: trade.theirUsername,
      theirCash: trade.theirCash,
      theirProperties: trade.theirProperties,
      myUsername: trade.requestedUsername,
      myCash: trade.requestedCash,
      myProperties: trade.requestedProperties,
    };
  }
};

export default parseTrade;
