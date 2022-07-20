import React from "react";
import styled from "styled-components/native";
import BackgroundView from "../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import RoundedButton from "../../../components/RoundedButton";
import Card from "../../../components/Card";

const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WideRoundButton = styled(RoundedButton)`
  width: 30%;
  height: 50px;
`;

const property = {
  country: "Spain",
  address: "17 Spring Dr",
  image: "../../../../assets/castle.jpg",
  price: 24000000,
  income: {
    alone: 4000000,
    set: 6000000,
    tier1: 12000000,
    tier2: 36000000,
  },
  propertyValue: 10000000,
  cost: {
    tier1Cost: 15000000,
    tier2Cost: 30000000,
  },
};
const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <CenterView>
          <Card property={property} />
        </CenterView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
