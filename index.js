import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './src/containers/App'

render(
  <App />,
  document.getElementById('root')
);
