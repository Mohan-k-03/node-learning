const expresss = require("express");
const morgan = require("morgan");

const app = expresss();

app.listen(3000);

// app.use((req, res, next) => {
//   console.log("this is midddle ware,request received");
//   console.log(req.host);
//   console.log(req.path);
//   console.log(req.method);
//   next();
// });

// app.use((req, res, next) => {
//   console.log("middleware 1");
//   next();
// });

// app.use(morgan("dev"));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  //   res.status(200).send('<h1>codeio</h1>');

  res.sendFile("./docs/index.html", { root: __dirname });
});
app.get("/join", (req, res) => {
  res.sendFile("./docs/join.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./docs/about.html", { root: __dirname });
});

// app.use((req, res, next) => {
//   console.log("middleware 2");
//   next();
// });

app.get("/joinus", (req, res) => {
  res.redirect("/join");
});

app.use((req, res) => {
  res.status(404).sendFile("./docs/Error_404.svg", { root: __dirname });
});
