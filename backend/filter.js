//var filterDir = require('./filtered-ls.js');
const fs = require('fs');
var dirPath = process.argv[2];
var extension = '.' + process.argv[3];


fs.readdir(dirPath, function(err, list) {
  if (err) throw err;
  console.log(list);
})
