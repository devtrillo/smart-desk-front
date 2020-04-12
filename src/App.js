import React from "react";
import { ThemeProvider } from "./context/Theme";
import Navbar from "components/Navbar";
import { BrowserRouter } from "react-router-dom";

import isDesktop from "utils/mediaQueries";
import styled from "@emotion/styled";
import AppRouter from "components/AppRouter";

const Main = styled.main`
  grid-area: main;
  position: relative;
  overflow-x: hidden;
  ${isDesktop} {
    margin: 1rem;
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Main>
          <AppRouter />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
