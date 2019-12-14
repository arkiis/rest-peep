import styled from "styled-components";

export const QuoteBoxContainer = styled.div`
  border: 3px solid var(--color-mainPink);
  box-sizing: border-box;
  max-width: 55.5rem;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  height: 25rem;
  width: 100%;
  border-radius: 15px;

  @media ${props => props.theme.mediaQueries.medium} {
    height: 16rem;
  }
`;
