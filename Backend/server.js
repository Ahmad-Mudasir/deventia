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
  } else {
    temp = {
      origin: 'stupid',
    };
  }
  res(null, temp);
}

// this is middleware

app.use(express.json());
// app.use(cors(options));
// app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'https://api.deventiatech.com'],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// import all routes
try {
  const routes = readdirSync('./Routes');
  routes.map((r) => app.use('/', require('./Routes/' + r)));
} catch (err) {
  console.error('Error reading routes directory:', err);
}
// database
mongoose
  .connect(
    'mongodb+srv://asgharkhanglipton:zZgDPYCBB59ia4iy@cluster0.7ipdy2j.mongodb.net/deventia'
  )
  .then(() => console.log('database connection successfully'))
  .catch((err) => console.log(`error connecting to mongodb ${err}`));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
