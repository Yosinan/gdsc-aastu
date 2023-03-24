// "use strict";

const {promises: {readFile}} = require("fs");

readFile("./testFile.txt").then(data => {
  console.log(data.toString());
}).catch(err => {
  console.error(err.message);
  process.exit(1);
});
