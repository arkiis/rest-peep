import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 884px;
  height: 716px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  margin: 0 auto 70px auto;
`;

export const BackgroundWrapper = styled.div`
  background-color: ${props => (props.bgBlack ? "var(--color-mainDark)" : "")};
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
