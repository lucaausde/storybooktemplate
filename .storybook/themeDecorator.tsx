// themeDecorator.js
import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../src/constants/theme/defaultTheme";
import GlobalStyle from "../src/constants/globals";

import { I18nextProvider } from "react-i18next";
import i18n from "../src/constants/lang/i18n";

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <I18nextProvider i18n={i18n}>
      <GlobalStyle />
      {storyFn()}
    </I18nextProvider>
  </ThemeProvider>
);

export default ThemeDecorator;
