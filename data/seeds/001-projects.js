
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(() => knex('resources').truncate())
    .then(() => knex('tasks').truncate()) 
    .then(() => knex('projects_resources').truncate()) 
    .then(() => {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Make a PUBG game clone'},
        {id: 2, name: 'Complete JS book reading'},
        {id: 3, name: 'Build a react-app from scratch'}
      ])
    })

    .then(() => {
      return knex('resources').insert([
        {id: 1, name: 'GPU', description: 'Helps in faster rendering of game'},
        {id: 2, name: 'Book', description: 'Helps you learn offline'},
        {id: 3, name: 'Laptop', description: 'Help you write code and publish app'},
        {id: 4, name: 'money', description: 'Helps to keep you alive'}
      ])
    })

    .then(() => {
      return knex('tasks').insert([
        {id: 1, description: 'Design characters of game', notes: 'Hiring a designer may help', project_id: 1},
        {id: 2, description: 'Buy a JS book online', notes: 'Search in amazon', project_id: 2},
        {id: 3, description: 'Install code editor', notes: 'Go to stackoverflow', project_id: 3},
        {id: 4, description: 'Do CRA', notes: 'Read React documentation', project_id: 3},
        {id: 5, description: 'Install unity engine', notes: 'Watch youtube video to install unity', project_id: 1},
        {id: 6, description: 'Publish app in heroku', notes: 'Register account in heroku', project_id: 3}
      ])
    })

    .then(() => {
      return knex('projects_resources').insert([
        {id: 1, project_id: 1, resource_id: 1},
        {id: 2, project_id: 2, resource_id: 2},
        {id: 3, project_id: 3, resource_id: 3},
        {id: 4, project_id: 1, resource_id: 4},
        {id: 5, project_id: 2, resource_id: 4},
        {id: 6, project_id: 3, resource_id: 4},
      ])
    })
};
