/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    { id: 1, title: 'Speed Racer', year: 2008, genre: 'Family/Action' },
    { id: 2, title: 'Mad Max', year: 1979, genre: 'Action/Sci-Fi' },
    { id: 3, title: 'Black Sun', year: 1964, genre: 'Thriller/Drama' },
    { id: 4, title: 'Turbo Kid', year: 2015, genre: 'Action/Sci-Fi' },
    { id: 5, title: 'Dreamland', year: 2016, genre: 'Comedy/Romance' },
    { id: 6, title: 'Frozen', year: 2013, genre: 'Family/Musical' },
    { id: 7, title: 'ZAAT', year: 1971, genre: 'Horror/Sci-Fi' },
    { id: 8, title: 'Death Race 2000', year: 1975, genre: 'Sci-Fi/Action' },
    { id: 9, title: 'In the Tall Grass', year: 2019, genre: 'Horror/Mystery' },
    { id: 10, title: 'The Big Lebowski', year: 1998, genre: 'Comedy/Crime' },
    { id: 11, title: 'The Guns of Navarone', year: 1961, genre: 'War/Action' },
    { id: 12, title: 'Chinatown', year: 1974, genre: 'Neo-Noir' },
    { id: 13, title: 'Return to Oz', year: 1985, genre: 'Family/Fantasy' },
    { id: 14, title: 'Silent Running', year: 1972, genre: 'Sci-Fi' },
    { id: 15, title: 'Tristan & Isolde', year: 2006, genre: 'Romance/War' },
    { id: 16, title: 'Blazing Saddles', year: 1974, genre: 'Comedy/Western' },
  ])
}
