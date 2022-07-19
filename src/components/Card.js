import React from "react";
import styled from "styled-components/native";

//various views
const BaseCardView = styled.View`
  width: 90%;
  height: 585px;
  background-color: ${({ theme }) => theme.colours.main.white};
  border: 5px solid #ffbb00;
`;

const ContentView = styled.View`
  flex: 1;
  margin: 20px;
  background-color: purple;
`;

const HeaderView = styled.View`
  flex: 0.15;
  margin-left: 5px;
  margin-right: 5px;
  background-color: aliceblue;
`;

const PictureView = styled.View`
  flex: 0.33;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  background-color: green;
`;

const InformationView = styled.View`
  flex: 0.51;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  background-color: red;
`;

// card text styling
const MainText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 28px;
  font-family: FuturaPT;
  text-decoration: underline;
`;

const Card = () => {
  return (
    <BaseCardView>
      <ContentView>
        <HeaderView />
        <PictureView />
        <InformationView>
          <MainText>Yur</MainText>
        </InformationView>
      </ContentView>
    </BaseCardView>
  );
};

export default Card;
