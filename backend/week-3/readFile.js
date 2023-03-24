const fs = require('fs');

fs.readFile('./testFile.txt', 'utf8', (err, data) => {
    if (err) { console.error(err) }
    console.log(data)

});

