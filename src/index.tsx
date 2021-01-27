import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { GlobalProvider } from './contexts/global'
import { GlobalStyle } from './styles/GlobalStyle'
import Loader from './components/Loader'

import Routes from './routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalProvider>
        <Loader />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

render(<App />, document.getElementById('root'))
