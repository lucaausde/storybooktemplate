import { generateMedia } from "styled-media-query";

const media = generateMedia({
  xs: "320px",
  s: "550px",
  md: "768px",
  l: "900px",
  xl: "1000px",
  lg: "1240px",
});

export default media;
