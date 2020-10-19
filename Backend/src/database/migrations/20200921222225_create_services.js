
exports.up = function(knex) {
    return knex.schema.createTable('services', function(table){
        table.increments('id');
        table.string('service').notNullable();
        
        table.string('establishment_id').notNullable();

        table.foreign('establishment_id').references('id').inTable('establishments').onUpdate('CASCADE').onDelete('CASCADE');
          
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    };
  
exports.down = function(knex) {
    return knex.schema.dropTable('services');
};