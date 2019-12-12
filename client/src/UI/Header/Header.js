import React from "react";
import styled, { css } from "styled-components";

const baseStyle = css`
  color: ${({ color }) => {
    if (color === "white") {
      return "var(--color-white)";
    } else if (color === "pink") {
      return "var(--color-mainPink)";
    } else {
      return "var(--color-mainDark)";
    }
  }};
  font-weight: 300;
  opacity: ${({ opacity }) => (opacity ? "0.8" : "1")};
  margin-top: 0;
  margin-bottom: ${({ noMargin }) => (noMargin ? "0rem" : "3rem")};
`;

const Heading1 = styled.h1`
  text-transform: uppercase;
  font-size: 6.4rem;
  ${baseStyle}
`;
const Heading2 = styled.h2`
  font-size: 1.8rem;
  ${baseStyle}
`;
const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;
const Heading4 = styled.h4`
  font-size: 1.3rem;
  ${baseStyle}
`;

const Header = ({ children, color, size, noMargin, opacity }) => {
  if (size === "h1")
    return (
      <Heading1 noMargin={noMargin} color={color} opacity={opacity}>
        {children}
      </Heading1>
    );
  if (size === "h2")
    return (
      <Heading2 noMargin={noMargin} color={color} opacity={opacity}>
        {children}
      </Heading2>
    );
  if (size === "h3")
    return (
      <Heading3 noMargin={noMargin} color={color} opacity={opacity}>
        {children}
      </Heading3>
    );
  if (size === "h4")
    return (
      <Heading4 noMargin={noMargin} color={color} opacity={opacity}>
        {children}
      </Heading4>
    );
};

export default Header;
