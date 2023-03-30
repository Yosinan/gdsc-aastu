const fs = require('fs');

const path = process.argv[2];
const ext = process.argv[3];

module.exports = function mymodule () {
  fs.readdir(path, function (err, list) {
  if (err) return err;
  list.forEach(function (file) {
    if (file.split('.')[1] === ext) {
      console.log(file);
    }
  });
});
}