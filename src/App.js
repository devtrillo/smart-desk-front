import React from "react";
import { ThemeProvider } from "./context/Theme";
import Navbar from "components/Navbar";
import { BrowserRouter } from "react-router-dom";

import isDesktop from "utils/mediaQueries";
import styled from "@emotion/styled";
import AppRouter from "components/AppRouter";
import { SocketProvider } from "context/Socket";

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
      <SocketProvider>
        <BrowserRouter>
          <Navbar />
          <Main>
            <AppRouter />
          </Main>
        </BrowserRouter>
      </SocketProvider>
    </ThemeProvider>
  );
};
export default App;
