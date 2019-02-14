const express = require('express');
const axios = rquire('axios');

const app = express();
const port = 3004;



app.get('/world', (req, res) => res.send('Hello Network!'));

app.listen(port,() => console.log('Example app listening on port ${port}!'));