/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 17:34:25
 * @LastEditTime: 2021-04-26 18:54:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/App.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Msg from './components/Msg'
import { setUserId, addMsg } from './actions'
import socket from './socekt'

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
  }

  componentDidMount () {
    // 初始化用户ID
    socket.on('ID', (ID) => {
      this.props.setUserId(ID)
    })
    // 接收消息
    socket.on('broadcast', (from, fromUser, msg) => {
      this.props.addMsg({ from, fromUser, msg })
    })
  }

  render () {
    return (
      <div className="App">
        {
          this.props.user.name ? '' : (<Redirect to="/" />)
        }
        <Route path="/" exact component={Login} />
        <Route path="/msg" component={Msg} />
      </div>
    )
  }
}

export default connect((state, props) => Object.assign({}, props, state), {
  setUserId, addMsg
})(App)
