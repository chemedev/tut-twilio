const mongoose = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
  .connect('mongodb://localhost/smsdb', options)
  .then(db => console.log('Db is connected'))
  .catch(err => console.log(err))
