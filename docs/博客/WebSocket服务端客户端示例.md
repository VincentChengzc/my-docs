# WebSocket服务端客户端示例

## 服务端 package.json

```json
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "ws": "^8.14.1"
  }
}

```

## 服务端node.js代码

```javascript
// 服务器
const express = require("express");
const http = require("http");
const Ws = require("ws").Server;
const app = express();
const server = http.createServer(app);
server.listen(3000);
app.use(express.static("www"));let wsServer = new Ws({ server });
wsServer.on("connection", (socket) => {
  console.log("有客户端连接我服务端成功");
  // 监听客户端发过来的消息
  socket.on("message", (msg) => {
    console.log("客户端发送过来的消息：" + msg);
    // 服务器给客户端发送消息
    socket.send("你好，这里是echo的node服务器，这是服务端给客户端的消息");
    const ip = msg.toString().split("-")[1];
  });
});
```

## 客户端前端代码

```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      const ws = new WebSocket("ws://192.168.2.61:3000");
      // const ws = new WebSocket('ws://192.168.2.105:9018/webpush')
      // const ws = new WebSocket(
      //   "ws://" + location.host + "/socket/webpush?wsToken=" + "Bearer " + token
      // ); // 带参数
      ws.addEventListener("open", () => {
        ws.send("你好echo服务器,我是客户端,ip-" + window.location.origin);
        console.log("websocket server connected");
      });

    ws.addEventListener("message", (data) => {
        console.log("服务器发来的数据:", data.data);
        console.log("socket地址是:", data.origin);
      });
      ws.addEventListener("close", (data) => {
        console.log("websocket server closed");
      });`</script>`

</body>
</html>
```
