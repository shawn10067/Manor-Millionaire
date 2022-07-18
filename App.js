import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { isLoaded, useFonts } from "expo-font";
import styled from "styled-components/native";
import { Text } from "react-native";
import BackgroundView from "./src/features/home/components/BackgroundView";
import SafeAreaView from "./src/components/SafeAreaView";
import AppLoading from "expo-app-loading";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    "Futura-Bold": require("./assets/fonts/Futura-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }
  const TextView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `;

  const MainText = styled.Text`
    color: white;
    font-size: 30px;
  `;
  const loadedTheFont = isLoaded("Futura-Bold");

  console.log(loadedTheFont);

  return (
    <ThemeProvider theme={theme}>
      <BackgroundView>
        <SafeAreaView>
          <TextView>
            <Text
              style={{
                fontFamily: "Futura-Bold",
                color: "white",
                fontSize: 30,
              }}
            >
              Often I get Cake
            </Text>
            <MainText>Cake</MainText>
          </TextView>
        </SafeAreaView>
      </BackgroundView>
      <StatusBar style="light" />
    </ThemeProvider>
  );
};
export default App;
