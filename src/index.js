/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 17:34:25
 * @LastEditTime: 2021-04-26 18:40:55
 * @LastEditors: Mr.cat
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import App from './App'
// import * as services from './serviceWorker';
import { async } from 'q'
import { Provider } from 'react-redux'
import store from './store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
