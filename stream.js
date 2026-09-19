const fs = require("fs");
const readStream = fs.createReadStream("./docs/lrn.txt", { encoding: "utf-8" });
const writeStream = fs.createWriteStream("./docs/copylrn.txt");
// readStream.on("data", (buffer) => {
  //   console.log(buffer.toString());
//   console.log(buffer);
//   writeStream.write('new buffer');
//   writeStream.write(buffer);
// });
// above or below anyone can use
readStream.pipe(writeStream)
