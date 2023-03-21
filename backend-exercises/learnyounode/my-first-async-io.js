//my-first-async-io.js

const fs = require('fs');
//const file = process.argv[2];
fs.readFile(process.argv[2], function fileAsc (err, r) {
 const line = r.toString().split('\n').length - 1;
 console.log(line);
});


