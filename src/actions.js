/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:10:51
 * @LastEditTime: 2021-04-26 18:31:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/action.js
 */
export const SET_USER_ID = 'set_user_id'
export const SET_USER_NAME = 'set_user_name'

export const ADD_MSG = 'add_msg'

export function setUserId (ID) {
  return {
    type: SET_USER_ID,
    value: ID
  }
}

export function setUserName (name) {
  return {
    type: SET_USER_NAME,
    value: name
  }
}

export function addMsg (msg) {
  return {
    type: ADD_MSG,
    msg
  }
}