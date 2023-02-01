import store from '../redux/store'
import { theme } from '../styles/theme'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

interface TestWrapperComponentProps {
  children: React.ReactNode
}

export const TestWrapperComponent: React.FC<TestWrapperComponentProps> = ({
  children,
}) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
)
