const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url);
  //   console.log(req.method);
  res.setHeader("content-type", "text/html");
  let path = "./docs/";

  if (req.url == "/") {
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url == "/home") {
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  } else if (req.url == "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (req.url == "/join") {
    path += "join.html";
    res.statusCode = 200;
  } else {
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
});
