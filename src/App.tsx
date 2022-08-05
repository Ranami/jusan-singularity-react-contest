import { createTheme, styled, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1B2430",
    },
  },
});

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navbar />
          <Routes>
            <Route path="/" element={"Home"} />
            <Route path="/page1" element={"Page 1"} />
            <Route path="/page2" element={"Page 2"} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
