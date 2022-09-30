import styled from "styled-components/native";

const BackgroundBlackView = styled.View`
  height: 100%;
  width: 100%;
  background-color: #0a122a;
  background-color: ${({ theme }) => theme.colours.main.grey};
`;

export default BackgroundBlackView;
