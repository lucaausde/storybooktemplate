import { createGlobalStyle } from "styled-components";
import reset from "./styles/reset";
import fonts from "./fonts/fonts";
import { headline1 } from "./styles/typography";

const GlobalStyle = createGlobalStyle`  
  ${reset}
  ${fonts}

  h1 {
    ${headline1}
  }

  *,
  :before,
  :after {
    box-sizing: border-box !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
  }
`;

export default GlobalStyle;
