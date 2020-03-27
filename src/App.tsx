import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./constants/theme/defaultTheme";
import GlobalStyle from "./constants/globals";

import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {t("homepage-title")}
    </ThemeProvider>
  );
};

export default App;
