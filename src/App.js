import React from "react";
import { ThemeProvider } from "./context/Theme";
import Navbar from "components/Navbar";
import styles from "./App.module.css";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <main className={styles.main}>
        <span>Context</span>
      </main>
    </ThemeProvider>
  );
};
export default App;
