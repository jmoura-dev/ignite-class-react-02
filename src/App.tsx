import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
