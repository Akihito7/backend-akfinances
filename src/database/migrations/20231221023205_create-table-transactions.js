exports.up = knex => knex.schema.createTable("transactions", table => {
    table.increments("id"),
    table.text("name").notNullable();
    table.text("value").notNullable();
    table.text("category").notNullable();
    table.text("type").notNullable();
    table.text("date").notNullable();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id").onDelete("CASCADE")
});

exports.down = knex => knex.schema.dropTable("transactions");