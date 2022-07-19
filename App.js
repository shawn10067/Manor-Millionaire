import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    FuturaPTHeavy: require("./assets/fonts/FuturaPTHeavy.otf"),
    FuturaPTMedium: require("./assets/fonts/FuturaPTMedium.otf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="light" />
    </ThemeProvider>
  );
};
export default App;
