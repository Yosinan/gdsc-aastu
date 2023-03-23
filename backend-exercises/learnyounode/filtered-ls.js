// my solution 
const fs = require('fs');

const path = process.argv[2];
const ext = process.argv[3];

fs.readdir(path, function (err, list) {
  if (err) throw err;
  list.forEach(function (file) {
    if (file.split('.')[1] === ext) {
      console.log(file);
    }
  });
});

// official solution
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })