import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import appStore from './AppStore'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root)

reactRoot.render(
  <Provider store={appStore}>
    <App />
  </Provider>
)
