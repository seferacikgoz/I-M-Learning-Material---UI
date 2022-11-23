import AppbarComp from "../components/AppbarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { teal } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette:{
      primary:{
        main:"#06d024",
        light: "#1706d0",
        dark: "#d00653"
      },
      secondary:{
        main:teal[500],
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <AppbarComp/>
      <TypoButtons />
      <TextFieldComp/>
      <CardGrid/>
      
    </ThemeProvider>
  );
};

export default Home;
