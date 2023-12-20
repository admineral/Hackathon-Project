const mongoose = require('mongoose');
const env = require('./environment/environment');
mongoose.Promise = global.Promise;


const mongoUri = `mongodb://${env.dbName}.documents.azure.com:${env.port}/?ssl=true&replicaSet=globaldb`;


const connect(){
    return mongoose.connect(mongoUri, { useMonoClient: true });
}

module.exports = {
    connect,
    mongoose
};