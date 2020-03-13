import { createGlobalStyle } from "styled-components";
import fonts from "./fonts/fonts.css";
import reset from "./reset.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
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
