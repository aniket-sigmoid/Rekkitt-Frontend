import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LogIn from "./Features/User/LogIn";
import LandingPage from "./Features/User/LandingPage";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1f2937",
      white: "#ffffff",
    },
    text: {
      main: "#FF0081",
      secondary: "#46596A",
    },
    secondary: {
      main: "#46596A"
    },
    white: {
      main: "#ffffff"
    },
    btnColor: {
      main: "rgba(252,0,127,0.15)",
    }
  },
  typography: {
    fontFamily: ["Hind Siliguri"],
  }
});



function App() {

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element={<LogIn/>}/>
            <Route exact path = "/landingpage" element={<LandingPage/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;