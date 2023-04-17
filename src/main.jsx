import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MiRouter from './MiRouter'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MiRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
