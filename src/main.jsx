import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ResetStyle from './style/ResetStyle'
import GlobalStyle from './style/GlobalStyle'
import { GeneralContext } from './contexts/GeneralContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <GeneralContext>
    <App />
    </GeneralContext>
  </React.StrictMode>
)
