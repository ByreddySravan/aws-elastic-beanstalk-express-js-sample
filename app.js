const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('CPSC-571-11-CloudComputing-2022!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
