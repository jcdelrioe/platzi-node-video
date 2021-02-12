const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorhandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser middleware
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});

// app.get('/', function (req, res) {
//   res.send('Hola mundillo');
// });
// app.get('/json', function (req, res) {
//   res.json({ hola: 'Mundillooo' });
// });
// app.get('/is_leap/:year', function (req, res) {
//   const { year } = req.params;

//   let isLeap = false;

//   if (isNaN(year)) {
//     res.send(`Year ${year} is not a number`);
//     return;
//   }

//   const yearAsNum = parseInt(year);
// console.log(yearAsNum);
// if (isNaN(yearAsNum)) {
//   res.send(`Year ${year} is not a number`);
//   return;
// }
// if (yearAsNum % 4 !== 0) {
//   isLeap = false;
// } else if (yearAsNum % 100 !== 0) {
//   isLeap = true;
// } else if (yearAsNum % 400 !== 0) {
//   isLeap = false;
// } else {
//   isLeap = true;
// }

//   isLeap = leapYear(yearAsNum);

//   res.send(`Year ${year} is ${isLeap ? 'leap' : 'common'}`);
// });
