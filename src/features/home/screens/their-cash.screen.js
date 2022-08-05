import React, { useContext, useRef } from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import { Keyboard, Text } from "react-native";
import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import { TradeContext } from "../../../services/trade/trade.context";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SendingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 8px;
`;

const DollarText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 50px;
  color: ${({ theme }) => theme.colours.main.green};
`;

const CashTextInput = styled(RoundedTextInput)`
  width: 57%;
  height: 60px;
`;

const CashInputView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const DoneButton = styled(RoundedButton)`
  height: 50px;
  width: 20%;
`;

const ContinueButton = styled(RoundedButton)`
  height: 70px;
  width: 75%;
  margin-bottom: 20px;
`;

const TheirCashTradeScreen = ({ navigation }) => {
  const { trade, setTrade } = useContext(TradeContext);
  const cash = useRef(0);

  const submit = () => {
    const theirCash = Number.parseInt(cash.current);
    console.log("sending cash", theirCash);
    setTrade({
      ...trade,
      theirCash,
    });
    navigation.navigate("Their Trade Properties");
  };
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainView>
          <SendingView>
            <MainText>Recieving Cash?</MainText>
            <CashInputView>
              <DollarText>$</DollarText>
              <CashTextInput
                keyboardType={"number-pad"}
                onEnd={(val) => (cash.current = val)}
                placeholder={"0"}
                defaultValue={0}
              />
              <DoneButton
                text="done"
                colour="green"
                fontSize={20}
                onPress={() => Keyboard.dismiss()}
              />
            </CashInputView>
          </SendingView>
          <ContinueButton
            text="Continue"
            colour="blue"
            onPress={() => submit()}
          />
        </MainView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default TheirCashTradeScreen;
