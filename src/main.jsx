import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import appStore from './AppStore'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
   document.getElementById('root')
)
