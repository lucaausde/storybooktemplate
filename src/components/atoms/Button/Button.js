import * as React from "react";
import styled from "styled-components";
import media from "../../../constants/media";

const ButtonStyled = styled.div`
  display: block;
  ${media.up("lg")} {
    background-color: black;
  }
`;

class Button extends React.Component {
  render() {
    return <ButtonStyled>{this.props.children}</ButtonStyled>;
  }
}

export default Button;
