const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add
};

function find() {
    return db('projects')
}

function findById(projectid) {
    return db('tasks')
    .join('projects', 'projects.id', 'project_id')
    .select('tasks.*', 'name as project_name')
    .where('project_id', projectid);
}

function add(project) {
   return db('projects').insert(project)
}