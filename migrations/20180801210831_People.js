
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('People', function(table){
        table.increments();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.integer('beep_test_score');
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('People')
};
