import styled from "styled-components/native";

const BackgroundView = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colours.main.grey};
`;

export default BackgroundView;
