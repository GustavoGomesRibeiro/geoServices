exports.up = function (knex) {
    return knex.schema.createTable("company", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("industry").notNullable();
      table.string("whatsapp").notNullable();
      table.string("latitude").notNullable();
      table.string("longitude").notNullable();
      table.boolean("open_on_weekends").notNullable();
      table.string("opening_hours").notNullable();
  
      table.integer("establishment_id").notNullable();
      table
        .foreign("establishment_id")
        .references("id")
        .inTable("establishments")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
  
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("company");
  };
  