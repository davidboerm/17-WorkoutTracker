const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://0.0.0.0/WorkoutTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(require('./routes/api.js'));
app.use(require('./routes/view.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
