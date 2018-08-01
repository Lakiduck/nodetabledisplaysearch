
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('People', function(table){
        table.increments();
        table.string('first name').notNullable();
        table.string('last name').notNullable();
        table.integer('beep test score');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('People')
};
