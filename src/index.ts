import * as WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

interface customWs extends WebSocket {
  room: string;
}

wss.on("connection", (clientWs, request) => {
  const ws = clientWs as customWs;
  ws.room = request.url || "";

  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      const cWs = client as customWs;

      if (cWs.readyState === WebSocket.OPEN && cWs.room === ws.room) {
        cWs.send(data);
      }
    });
  });
});

wss.once("listening", ()=>{
  console.log("Listening on port 8080")
})
