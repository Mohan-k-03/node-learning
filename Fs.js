//Fs file system
const fs = require("fs");

if (!fs.existsSync("./docs")) {
  fs.mkdir("./docs", (err) => {
    if (err) {
      console.log(err, message);
    } else {
      console.log("ok its worked");
    }
  });
  console.log("hre hre");
}

fs.writeFile("./docs/file.txt", "HI HI HI", (err) => {
  if (err) {
    console.log("err.message");
  } else {
    console.log("file created");
  }
});
