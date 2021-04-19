const mongoose = require('mongoose');
const mongoConfig = require('./config').Mongo;

mongoose.connect('mongodb://' + mongoConfig.path + '/' + mongoConfig.dbName, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true })
    .then(db => console.log('Db is on'))
    .catch(error => console.log(error))