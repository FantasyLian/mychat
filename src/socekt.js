/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:10:36
 * @LastEditTime: 2021-04-26 18:10:36
 * @LastEditors: Mr.cat
 * @Description: In User Settings Edit
 * @FilePath: /mychat/src/socekt.js
 */
import io from 'socket.io-client'
const HOST = 'ws://localhost:8080/'
export default io(HOST)