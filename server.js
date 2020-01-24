const express = require('express');

const server = express();
server.use(express.json());

const projectRoute = require('./routes/projectRouter.js')
const taskRoute = require('./routes/taskRouter.js')
const resourceRoute = require('./routes/resourceRouter.js')

server.use('/api/projects', projectRoute)
server.use('/api/tasks', taskRoute)
server.use('/api/resources', resourceRoute)


server.get('/', (req,res) => {
    res.status(200).send(`Node Db challenge running currently.`)
});

module.exports = server;