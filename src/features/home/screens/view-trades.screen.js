import React from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { SeperatorBar } from "../components/view-properties.screen.styles";

const UserTradeView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 30px;
`;

const UserText = styled(Text)`
  font-family: FuturaPTMedium;
  font-size: 23px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 10px;
`;

const UserView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const EmptyTradeView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const EmptyTradeText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  padding: 5px;
`;

const ViewTradeButton = styled(RoundedButton)`
  width: 130px;
  height: 55px;
`;

const users = [
  { username: "sheenMachine" },
  { username: "karan343" },
  { username: "raju293" },
  { username: "singhamRockx" },
  { username: "ummy" },
  { username: "Peebody" },
  { username: "EuRekA247" },
  { username: "zimbdestroyer" },
  { username: "luniwoney496565" },
];

const renderUsers = ({ item }) => {
  return (
    <UserView>
      <UserText>{item.username}</UserText>
      <ViewTradeButton colour="blue" text="view" fontSize={27} />
    </UserView>
  );
};

const ViewTradesScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserTradeView>
          <MainText>View Trades</MainText>
          <SeperatorBar />
          {users && users.length !== 0 ? (
            <FlatList
              data={users}
              renderItem={renderUsers}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <EmptySearchText>No trades</EmptySearchText>
              <Icon
                name="cube-send"
                size={100}
                color={theme.colours.main.white}
              />
            </EmptyTradeView>
          )}
        </UserTradeView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewTradesScreen;
