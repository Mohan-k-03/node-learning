const http = require("http");

const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url);
  //   console.log(req.method);
  res.setHeader("content-type", "text/html");
  let path = "./docs/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/home":
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/join":
      path += "join.html";
      res.statusCode = 200;
      break;
    default:
      path += "notfound.html";
      res.statusCode = 404;
  }

  if (fs.existsSync(path)) {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err.message);
        res.end();
      } else {
        res.write(data);
        res.end();
        // console.log(data.toString(), "success");
      }
    });
  } else {
    console.log("file not found");
  }

  //   res.write('<head rel="script" href=""></html>');
  //   res.write("<h1> welcome clients</h1>");
  //   res.write("<h2>\nwelcome to my first server</h2>");
  //   res.end();
});

server.listen(3000, "localhost", () => {
  console.log("server is lisenting");
  console.log(_.random(14, 44));
});
