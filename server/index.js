const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Req received\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("file.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi, ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("This is your result for f" + search);
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form");
        else if (req.method === "POST") {
          // DB quary...
          res.end("success");
        }
      default:
        res.end("404 Not found");
    }
  });
});

myServer.listen(3000, () => console.log("Server Started!"));
