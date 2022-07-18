import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { isLoaded, useFonts } from "expo-font";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    "Futura-Bold": require("./assets/fonts/Futura-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  const loadedTheFont = isLoaded("Futura-Bold");

  console.log(loadedTheFont);

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="light" />
    </ThemeProvider>
  );
};
export default App;
