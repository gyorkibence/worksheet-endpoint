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

app.get('/worksheet/:id', (req, res) => {
  if (req.params.id) {
    const filteredData = data.data.filter((e) => +e.resourceId === +req.params.id);
    res.send(filteredData);
  }
});

const paginatedData = (pageNumber = 1) => (data.data.filter((e, i) => {
    return i >= (pageNumber - 1) * 12 && i < pageNumber * 12;
  })
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

