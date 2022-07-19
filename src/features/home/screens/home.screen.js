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
  rent: {
    alone: 4000000,
    set: 6000000,
    house: 12000000,
    hotel: 36000000,
  },
  propertyValue: 10000000,
  cost: {
    house: 15000000,
    hotel: 30000000,
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
