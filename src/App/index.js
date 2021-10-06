import { ThemeProvider } from "styled-components";

// import Button from "../Button";
import Header from "../Header/index.js";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}