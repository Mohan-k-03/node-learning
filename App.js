const expresss = require("express");

const app = expresss();

app.listen(3000);

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
app.get('/joinus',(req,res)=>{
    res.redirect('/join')
})

app.use((req,res) => {
  res.sendFile("./docs/Error_404.svg", { root: __dirname });
});
