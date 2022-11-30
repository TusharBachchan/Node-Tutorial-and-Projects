const fs = require('fs');
fs.writeFileSync('notes.txt', 'this note was created using Node js');
// Using appendFileSync
fs.appendFileSync('notes.txt', ' by me');