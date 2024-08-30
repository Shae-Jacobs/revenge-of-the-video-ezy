/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id')
    table.string('title')
    table.integer('year')
    table.string('genre')
    table.string('poster_url')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('movies')
}
