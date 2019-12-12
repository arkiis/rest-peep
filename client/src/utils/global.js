import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
*, 
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

/** 1rem = 16px */
html{
    font-size: 62.5%;
    /* now 1rem = 10px */
    box-sizing: border-box;
    --color-mainDark: ${props => props.theme.colors.mainDark};
    --color-mainPink: ${props => props.theme.colors.mainPink};
    --color-text: ${props => props.theme.colors.textColor};
    --color-white: ${props => props.theme.colors.whiteColor};
    --shadow: ${props => props.theme.colors.shadow};
}

@media ${props => props.theme.mediaQueries.small}{
    font-size: 60%;
}
@media ${props => props.theme.mediaQueries.smallest}{
    font-size: 55%;
}

body{
   
        font-family: "Roboto", sans-serif;
        line-height: 1.6;
    
  }
  a, input, textarea, button{
      outline: none;
      font-family: inherit;
  }
`;
