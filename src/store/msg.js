/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:09:48
 * @LastEditTime: 2021-04-26 18:29:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/store/msg.js
 */
import { ADD_MSG } from '../actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = [], action) {
  switch (action.type) {
    case ADD_MSG:
      return [
        ...state,
        action.msg
      ]
    default:
      return state
  }
}