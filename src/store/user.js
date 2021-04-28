/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:09:41
 * @LastEditTime: 2021-04-26 18:27:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/store/user.js
 */
import { SET_USER_ID, SET_USER_NAME } from '../actions'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = { ID: null, name: null }, action) {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        ID: action.value
      }
    case SET_USER_NAME:
      return {
        ...state,
        name: action.value
      }
    default:
      return state
  }
}