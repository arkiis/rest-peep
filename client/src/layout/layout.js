import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  width: 100%;
`;

const Layout = ({ children }) => <MainWrapper>{children}</MainWrapper>;

export default Layout;
