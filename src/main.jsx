import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FieldContextProvider } from './context/fieldContext'
import SelectedPlayersProvider from './context/selectedContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FieldContextProvider>
    <SelectedPlayersProvider>
      <App/>
    </SelectedPlayersProvider>
  </FieldContextProvider>
)
