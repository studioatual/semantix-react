import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #3B4252;
    min-height: 100vh;
    background: #FAFAFA;
  }

  #root {
    min-height: 100vh;
  }

  button {
    font-family: 'Lato', sans-serif;
  }
`
