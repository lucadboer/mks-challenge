import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    ${({ theme }) => css`
      background-color: ${theme.colors.background.primary};
      color: ${theme.colors.text.primary};
    `}
  }

  body, input, textarea, button, select {
    font: 400 1rem ${({ theme }) => theme.fonts.primary};
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
  }

  a, button {
    cursor: pointer;
  }

  button {
    all: unset;
  }

  input {
    border: 0;
  }

  input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
  input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    
    50% {
      opacity: .5;
    }
  }
`
