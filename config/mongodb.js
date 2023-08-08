const { MongoClient } = require('mongodb');

const url = 'mongodb://zaw:sekarep@127.0.0.1:27017?authSource=admin';
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
        console.log('Connected successfully to server');
    } catch (e) {
        console.log(e)
    }
})();

const db = client.db('latihanedu');
module.exports = db;