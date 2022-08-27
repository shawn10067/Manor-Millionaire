import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
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

// firebase setup
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
const firebaseConfig = {
  apiKey: "AIzaSyBgT5huxjtJtGNhAXPUrph2Uy4ofcAyVLw",
  authDomain: "manor-millionaire.firebaseapp.com",
  projectId: "manor-millionaire",
  storageBucket: "manor-millionaire.appspot.com",
  messagingSenderId: "357017211894",
  appId: "1:357017211894:web:690dffc13cd716f82fadd7",
  measurementId: "G-JX8LYL5R3Z",
};
if (getApps().length === 0) {
  const app = initializeApp(firebaseConfig);
}

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
    <AuthenticationContextProvider>
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
    </AuthenticationContextProvider>
  );
};
export default App;
