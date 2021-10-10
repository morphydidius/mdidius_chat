const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.listen(PORT, function () {
  	console.log(`MDidius Chat listening on port ${PORT}!`);
}); 