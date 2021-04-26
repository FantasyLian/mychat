/*
 * @Author: Mr.cat
 * @Date: 2021-04-26 18:03:57
 * @LastEditTime: 2021-04-26 19:32:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /mychat/server.js
 */
const http = require('http')
const Koa = require('koa')
const io = require('socket.io')(http)
const uuid = require('uuid-v4')
const server = new Koa()

const httpServer = http.createServer(server.callback())
httpServer.listen(8585)

const wsServer = io.listen(httpServer)

wsServer.on('connection', sock => {
  console.log('connected')

  const ID = uuid()
  sock.emit('ID', ID)

  sock.on('msg', (user, msg) => {
    wsServer.emit('broadcast', ID, user, msg)
  })
})