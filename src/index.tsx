import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'reset-css'
import store from './store'

import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
