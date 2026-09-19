// //Fs file system
const fs = require("fs");

// if (!fs.existsSync("./docs")) {
//   fs.mkdir("./docs", (err) => {
//     if (err) {
//       console.log(err, message);
//     } else {
//       console.log("ok its worked");
//     }
//   });
//   console.log("hre hre");
// }

// fs.writeFile("./docs/file.txt", "HI HI HI", (err) => {
//   if (err) {
//     console.log("err.message");
//   } else {
//     console.log("file created");
//   }
// });

// fs.writeFile("./docs/lrn.txt", "this is Your Mohan", (err) => {
//   if (err) {
//     console.log("already there");
//   } else {
//     console.log("file created");
//   }
// });
// if (fs.existsSync("./docs/lrn.txt")) {
//   fs.readFile("./docs/lrn.txt", (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log(data.toString());
//     }
//   });
// }

// if (fs.existsSync("./docs/file.txt")) {
//   fs.unlink("./docs/file.txt", (err) => {
//     console.log(err.message);
//   });
// } else {
//   console.log("file deleted");
// }
// if (fs.existsSync("./docs/lrn.txt")) {
//   fs.unlink("./docs/lrn.txt", (err) => {
//     console.log(err.message);
//   });
// } else {
//   console.log("file deleted");
// }

// if (fs.existsSync("./docs")) {
//   fs.rmdir("./docs", (err) => {
//     if (err) {
//       console.log(err.message);
//     }else{console.log('deleted')}
//   });
// } else {
//   console.log("no dirctory found ");
// }
