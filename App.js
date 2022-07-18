import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import HomeScreen from "./src/features/home/screens/home.screen";
import theme from "./src/infrastructure/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
