/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:09:33
 * @LastEditTime: 2021-04-26 18:13:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/store/index.js
 */
import { createStore, combineReducers } from 'redux'
import user from './user'
import msg from './msg'

export default createStore(combineReducers({
  user, msg
}))