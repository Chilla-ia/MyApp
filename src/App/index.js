import { ThemeProvider } from "styled-components";

import Header from "../Header/index.js";
import theme from "./theme";
import WelcomeDraw from "../WelcomeDraw/index.js";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <WelcomeDraw />
      <Stack spacing={2} direction="row"  justifyContent="center" alignItems="center" margin="50px">
        <Button variant="outlined" color="primary">Voir ma liste d'invité</Button>
        <Button variant="contained" color="primary">Ajouter des invités</Button>
      </Stack>
    </ThemeProvider>
  );
}
