const http = require("http");
const url = require("url");

const requestListener = (request, response) => {
  console.log("request listener emitted");
  const parsedURL = url.parse(request.url, true);

  switch (request.url.path) {
    case "/users":
      switch (request.method) {
        case "POST":
          // create a new user.
          break;
        case "GET":
          // get all users
          break;
        default:
        // not found
      }
      break;
    case "/todos":
      switch (request.method) {
        case "POST":
          // create a new user.
          break;
        case "GET":
          // get all users
          break;
        default:
        // not found
      }
      break;
    case "posts":
      switch (request.method) {
        case "POST":
          // create a new user.
          break;
        case "GET":
          // get all users
          break;
        default:
        // not found
      }
      break;
  }

  console.log(parsedURL);
  const queryParams = parsedURL.query;
  console.log(queryParams);

  const message = `
    {
        "message": "Hello my name ${queryParams.name}"
    }
`;

  response.writeHead(200, {
    "Content-Type": "application/json"
  });

  response.write(message);
  response.end(); // harus!!!
};

const server = http.createServer(requestListener);

// event listener / event handler / callbacks.
server.on("listening", (...argv) => {
  console.log("server is listening on port 3000");
  console.log("listening event emitted with argv", argv);
});

server.on("close", () => {
  console.log("server is closed");
  // kirim email server lagi down.
});

server.on("error", (err) => {
  console.log("server is error");
  console.error(err);
});

server.listen(3000); // menjalankan server

// 1d kemudian aku close server.
setTimeout(() => {
  server.close();
}, 1000_000);
