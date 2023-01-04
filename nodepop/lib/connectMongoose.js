const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connection.on('error', err => {
  console.log('Error connecting to MongoDB', err);
  process.exit(1);
});

mongoose.connection.once('open', () => {
  console.log('Connecting to MongoDB in', mongoose.connection.name);
});

mongoose.connect('mongodb://127.0.0.1/nodepop')

module.exports = mongoose.connection;