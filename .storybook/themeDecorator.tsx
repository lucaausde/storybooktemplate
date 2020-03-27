// themeDecorator.js
import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/constants/theme/defaultTheme";
import GlobalStyle from "../src/constants/globals";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
