import { createGlobalStyle } from "styled-components";
import reset from "./styles/reset";
import fonts from "./fonts/fonts";

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

  ::-moz-selection {
    color: ${props => props.theme.colors.highlightcolor};
    background: ${props => props.theme.colors.highlightbackground};
  }
`;

export default GlobalStyle;
