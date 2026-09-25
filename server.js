const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.use('/professional', require('./routes/professional'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});