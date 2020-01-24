const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add
};

function find() {
    return db.select("tasks.*", "projects.name", "projects.description").from("tasks")
             .join("projects", "projects.id", "tasks.project_id")
}

function findById(id) {
    return db.select("tasks.*", "projects.name", "projects.description").from("tasks")
             .join("projects", "projects.id", "tasks.project_id")
             .where("tasks.id", id).first()
}

function add(task) {
   return db('tasks').insert(task)
}

