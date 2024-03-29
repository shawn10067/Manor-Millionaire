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
  initializeApp(firebaseConfig);
}

// apollo client setup, with cache and subscription setup
import { ApolloProvider } from "@apollo/client";
import CreateApolloClient from "./src/utils/apolloClientCreator";
import { BackHandler, Platform } from "react-native";
import { MapContextProvider } from "./src/services/map/map.context";

const App = () => {
  // client config
  const [userToken, setUserToken] = useState(null);
  let client = CreateApolloClient(userToken);

  useEffect(() => {
    client = CreateApolloClient(userToken);
  }, [userToken]);

  // sound config
  const [soundtrack, setSoundtrack] = useState(null);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sounds/soundtrack.mp3")
    );
    console.log("Playing Sound");
    if (!soundtrack) {
      setSoundtrack(sound);
      // await sound.playAsync();
    }
    const playback = new Audio.Sound();
    playback.setIsLoopingAsync(true);
  };
  useEffect(() => {
    if (!soundtrack) {
      // playSound();
    }
    return soundtrack
      ? () => {
          soundtrack.unloadAsync();
        }
      : undefined;
  }, [soundtrack]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });

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
    <ApolloProvider client={client}>
      <AuthenticationContextProvider
        userToken={userToken}
        setUserToken={setUserToken}
      >
        <UserContextProvider>
          <BankruptcyContextProvider>
            <SpinContextProvider>
              <TradeContextProvider>
                <MapContextProvider>
                  <NavigationContainer>
                    <ThemeProvider theme={theme}>
                      <Navigation />
                      <StatusBar style="light" />
                    </ThemeProvider>
                  </NavigationContainer>
                </MapContextProvider>
              </TradeContextProvider>
            </SpinContextProvider>
          </BankruptcyContextProvider>
        </UserContextProvider>
      </AuthenticationContextProvider>
    </ApolloProvider>
  );
};
export default App;
