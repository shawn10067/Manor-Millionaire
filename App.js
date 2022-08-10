import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/infrastructure/navigation";
import { UserContextProvider } from "./src/services/user/user.context";
import { TradeContextProvider } from "./src/services/trade/trade.context";
import { SpinContextProvider } from "./src/services/spin/spin.context";
import { BankruptcyContextProvider } from "./src/services/bankruptcy/bankruptcy.context";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

const App = () => {
  // sound config
  const [soundtrack, setSoundtrack] = useState(null);

  const playSound = async () => {
    console.log("playing sound");

    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sounds/soundtrack.mp3")
    );
    if (!soundtrack) {
      setSoundtrack(sound);
      await sound.playAsync();
    }
    const playback = new Audio.Sound();
    playback.setIsLoopingAsync(true);
    console.log("playing sound");
  };

  useEffect(() => {
    if (playSound) {
      playSound();
    }
    return soundtrack
      ? () => {
          soundtrack.unloadAsync();
        }
      : undefined;
  }, [soundtrack]);

  // font load
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
      <BankruptcyContextProvider>
        <SpinContextProvider>
          <TradeContextProvider>
            <NavigationContainer>
              <ThemeProvider theme={theme}>
                <Navigation playSound={playSound} />
                <StatusBar style="light" />
              </ThemeProvider>
            </NavigationContainer>
          </TradeContextProvider>
        </SpinContextProvider>
      </BankruptcyContextProvider>
    </UserContextProvider>
  );
};
export default App;
