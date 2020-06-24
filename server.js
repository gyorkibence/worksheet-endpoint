const express = require('express');
const app = express();
const data = require('./data');
const PORT = 3000;

app.get('/worksheets', (req, res) => {
    res.send(paginatedData(req.query.page));
});

const paginatedData = (pageNumber = 1) => (data.data.filter((e, i) => {
    return i >= (pageNumber - 1) * 10 && i < pageNumber * 10;
  })
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

