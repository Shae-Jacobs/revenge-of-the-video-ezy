/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments('id')
    table.integer('movie_id')
    table.string('review_text')
    table.integer('movie_rating')
    table.string('reviewer_name')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('reviews')
}
