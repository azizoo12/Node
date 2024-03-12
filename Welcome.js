const fs = require('fs');

// Write data to welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File welcome.txt created successfully');
});

// Read data from hello.txt and log it
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
