import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
