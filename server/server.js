const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { readdirSync } = require('fs');

const cors = require('cors');

let allowed = ['http://localhost:4000', 'http://localhost:5173', 'another'];
function options(req, res) {
  let temp;
  let origin = req.header('Origin');
  if (allowed.indexOf(origin) > -1) {
    temp = {
      setSuccessStatus: 200,
      origin: true,
    };
    //   } else {
    //     temp = {
    //       origin: '',
    //     };
  }
  res(null, temp);
}

// this is middleware

app.use(express.json());
app.use(cors(options));

// import all routes
readdirSync('./Routes').map((r) => app.use('/', require('./Routes/' + r)));

// database
mongoose
  .connect('mongodb://localhost:27017/deventia')
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log(`error connecting to mongodb ${err}`));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
