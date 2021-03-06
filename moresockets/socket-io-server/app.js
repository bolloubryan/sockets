// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const port = process.env.PORT || 8080;
// //const index = require("./routes/index");

// const app = express();
// // const cors = require('cors');
// // app.use(cors());

// // app.use(index);

// const server = http.createServer(app);

// const io = socketIo(server);

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));


/////------------ NEW TUTORIAL ---------------------------////////

// const bodyParser = require('body-parser');
// const express = require('express');

// const port = process.env.PORT || 8080;

// const app = express();

// const cors = require('cors');
// app.use(cors());

// app.use(bodyParser.json());

// const http = require("http");
// const server = http.createServer(app);

// const io = require('socket.io')(server, {
//   cors: {
//     origin: '*',
//   }
// });

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));


/////------------ NEW SOCKET ROOM---------------------------////////

const bodyParser = require('body-parser');
const express = require('express');

const port = process.env.PORT || 8080;

const app = express();

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

const http = require("http");
const server = http.createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

io.on("connection", (socket) => {
  console.log(socket.id)
  console.log("New client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("joinroom", (socket) => {
    console.log("join")
    //console.log(socket)
    //console.log(socket.id)
  });
});



// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

server.listen(port, () => console.log(`Listening on port ${port}`));
