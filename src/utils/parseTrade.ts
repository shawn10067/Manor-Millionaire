import { useContext } from "react";
import { Trade, ParsedTrade } from "../../graphql";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const parseTrade = (trade: ParsedTrade | Trade, isView: boolean) => {
  console.log(`isView is ${isView} `, "parsing trade: ", trade);
  const { user } = useContext(AuthenticationContext);
  if (isView) {
    console.log("parsing db trade");
    const dbTrade = trade as Trade;
    return {
      theirCash: dbTrade.senderCash,
      theirProperties: dbTrade.senderProperties,
      myUsername: user.username,
      myCash: dbTrade.recieverCash,
      myProperties: dbTrade.recieverProperties,
    };
  } else {
    console.log("parsing local trade");
    const dbTrade = trade as ParsedTrade;
    console.log("db trade ", dbTrade);
    return dbTrade;
  }
};

export default parseTrade;
