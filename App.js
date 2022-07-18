import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    FuturaPT: require("./assets/fonts/FuturaPTBold.otf"),
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
