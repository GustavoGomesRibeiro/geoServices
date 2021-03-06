exports.up = function (knex) {
    return knex.schema.createTable("establishments", function (table) {
      table.increments("id");
      table.string("avatar");
      table.string("username").unique().notNullable();
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.string("passwordResetToken");
      table.date("passwordResetExpires");
  
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("establishments");
  };
  