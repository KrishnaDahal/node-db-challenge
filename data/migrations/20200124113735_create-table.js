
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.text('description');
      tbl.boolean('completed').defaultTo(false).notNullable();
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
      tbl.text('description');
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description').notNullable();
      tbl.text('notes');
      tbl.boolean('completed').defaultTo(false).notNullable();
      tbl.integer('project_id').notNullable()
         .unsigned()
         .references('id')
         .inTable('projects')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
  })
  .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl.integer('project_id').notNullable()
         .unsigned()
         .references('id')
         .inTable('projects')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.integer('resource_id').notNullable()
         .unsigned()
         .references('id')
         .inTable('resources')
         .onDelete('CASCADE')
         .onUpdate('CASCADE');
      tbl.unique(['project_id','resource_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects')
  .dropTableIfExists('resources')
  .dropTableIfExists('task')
  .dropTableIfExists('projects_resources')  
};
