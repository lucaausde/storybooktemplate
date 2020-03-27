/* Attribution: https://fonts.google.com/attribution (Roboto: Apache License, version 2.0) */
import playfair2 from "./playfair-display-v20-latin-regular.woff2";
import playfair from "./playfair-display-v20-latin-regular.woff";

const fonts = `
  /* playfair-display-regular - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    src: local("Playfair Regular"), local("Playfair-Regular"),
        url('${playfair2}') format('woff2'),
        url('${playfair}') format('woff');
  }
`;

export default fonts;
