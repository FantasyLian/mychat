/*
 * @Author: your name
 * @Date: 2021-04-26 18:08:50
 * @LastEditTime: 2021-04-26 19:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/components/Login.js
 */
import React from 'react'
import { connect } from 'react-redux'
import { setUserName } from '../actions'
class Login extends React.Component {
  constructor() {
    super()
    this.rnd = Math.floor(Math.random() * 1000000)
  }
  login = () => {
    let username = this.refs.username.value
    this.props.setUserName(username)
    this.refs.username.value = ''
    this.props.history.push('/msg')
  }

  render () {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h2 className="panel-title">
            登录
          </h2>
        </div>
        <div className="panel-body">
          <div className="from-group">
            <label htmlFor={'username' + this.rnd}></label>
            <input className="from-control" type="text" id={'username' + this.rnd} ref="username" placeholder="请输入用户名" />
          </div>
          <div className="from-group" style={{ 'marginTop': '10px' }}>
            <button type="button" className="btn btn-default" onClick={this.login}>登录</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state, props) => Object.assign({}, props, state), {
  setUserName
})(Login)