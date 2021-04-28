/*
 * @Author: your name
 * @Date: 2021-04-26 18:08:58
 * @LastEditTime: 2021-04-26 19:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/components/Msg.js
 */
import React from 'react'
import { connect } from 'react-redux'
import msg from '../store/msg'
import socket from '../socekt'
class Msg extends React.Component {
  send = () => {
    console.log('this.props.user.username:', this.props.user.username)
    socket.emit('msg', this.props.user.name, this.refs.msg.value)
    this.refs.msg.value = ''
  }

  render () {
    return (
      <div>
        <div>
          <div className="from-group">
            <textarea className="from-control" ref="msg"></textarea>
          </div>
          <div className="from-group">
            <button className="btn btn-default" type="button" onClick={this.send}>发送</button>
          </div>
        </div>
        <ul>
          {
            this.props.msg.map(({ from, fromUser, msg }, index) => (
              <li key={index}>
                <h3 className="list-group-item-heading" style={{ color: from === this.props.user.ID ? 'red' : '' }}>{fromUser}</h3>
                <p className="list-group-item-text">{msg}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect((state, props) => Object.assign({}, props, state), {})(Msg)