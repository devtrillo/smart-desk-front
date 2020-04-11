import React, { useEffect, createContext, useState } from "react";

const themes = {
  light: "dark",
  solar: "light",
  dark: "solar",
};

export const ThemeContext = createContext({
  theme: themes.dark,
});

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) localStorage.setItem("theme", themes.dark);
    return !!theme ? theme : themes.dark;
  });

  const changeTheme = () => {
    setSelectedTheme(themes[selectedTheme]);
  };

  useEffect(() => {
    localStorage.setItem("theme", selectedTheme);
    const bodyClass = document.body.classList;
    bodyClass.value = selectedTheme;
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ selectedTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
