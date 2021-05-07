const Koa = require("koa")
const app = new Koa()
const server = require("http").Server(app.callback())
const ws = require("socket.io")(server)
const uuid = require('uuid/v4')

ws.on("connection", socket => {
  console.log('connected')
  const ID = uuid()

  socket.emit('ID', ID)

  socket.on('msg', (user, msg) => {
    ws.emit('broadcast', ID, user, msg)
  })
})

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
})

server.listen(8080, () => {
  console.log("ws listening on 8080")
})
