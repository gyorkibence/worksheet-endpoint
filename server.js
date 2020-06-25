const express = require('express');
const CORS = require('cors');
const app = express();
const data = require('./data');
const PORT = process.env.PORT || 5000;

app.use(CORS());

app.get('/', (req, res) => {
  res.send('hellobello!');
    // res.send(paginatedData(req.query.page));
});

app.get('/worksheets', (req, res) => {
    res.send(paginatedData(req.query.page));
});

const paginatedData = (pageNumber = 1) => (data.data.filter((e, i) => {
    return i >= (pageNumber - 1) * 10 && i < pageNumber * 10;
  })
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

