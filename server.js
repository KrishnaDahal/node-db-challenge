const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).send(`Node Db challenge running currently.`)
});

module.exports = server;