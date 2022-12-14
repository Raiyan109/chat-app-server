const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion } = require('mongodb');
// middle ware
app.use(cors())
app.use(express.json())


// chat_app_user
// HRyGGpdQ1PNqRjSn


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g2u2duk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('chat db connected');
    // perform actions on the collection object
    client.close();
});
app.get('/', (req, res) => {
    res.send('Running server')
})

app.listen(port, () => {
    console.log('listening to port', port);
})


