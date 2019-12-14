import styled from "styled-components";

export const TitleImg = styled.img`
  padding-left: "72px";
  @media ${props => props.theme.mediaQueries.medium} {
    width: 400px;
  }
`;
