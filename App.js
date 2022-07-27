import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/infrastructure/navigation";
import { UserContextProvider } from "./src/services/user/user.context";

const App = () => {
  const [fontLoaded, fontError] = useFonts({
    FuturaPTHeavy: require("./assets/fonts/FuturaPTHeavy.otf"),
    FuturaPTMedium: require("./assets/fonts/FuturaPTMedium.otf"),
  });

  if (!fontLoaded || fontError) {
    console.log("There was an error loading fonts.");
    return null;
  }

  return (
    <UserContextProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Navigation />
          <StatusBar style="light" />
        </ThemeProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
};
export default App;
