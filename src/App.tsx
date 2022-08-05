import { createTheme, styled, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";

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
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
