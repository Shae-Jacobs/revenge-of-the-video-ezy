/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      id: 1,
      title: 'Speed Racer',
      year: 2008,
      genre: 'Family/Action',
      poster_url: 'SpeedRacer.jpg',
    },
    {
      id: 2,
      title: 'Mad Max',
      year: 1979,
      genre: 'Action/Sci-Fi',
      poster_url: 'MadMax.jpg',
    },
    {
      id: 3,
      title: 'Black Sun',
      year: 1964,
      genre: 'Thriller/Drama',
      poster_url: 'BlackSun.jpg',
    },
    {
      id: 4,
      title: 'Turbo Kid',
      year: 2015,
      genre: 'Action/Sci-Fi',
      poster_url: 'TurboKid.jpg',
    },
    {
      id: 5,
      title: 'Dreamland',
      year: 2016,
      genre: 'Comedy/Romance',
      poster_url: 'Dreamland.jpg',
    },
    {
      id: 6,
      title: 'Frozen',
      year: 2013,
      genre: 'Family/Musical',
      poster_url: 'frozen-disney.jpg',
    },
    {
      id: 7,
      title: 'ZAAT',
      year: 1971,
      genre: 'Horror/Sci-Fi',
      poster_url: 'ZAAT.jpg',
    },
    {
      id: 8,
      title: 'Death Race 2000',
      year: 1975,
      genre: 'Sci-Fi/Action',
      poster_url: 'DeathRace2000.jpg',
    },
    {
      id: 9,
      title: 'In the Tall Grass',
      year: 2019,
      genre: 'Horror/Mystery',
      poster_url: 'InTheTallGrass.jpg',
    },
    {
      id: 10,
      title: 'The Big Lebowski',
      year: 1998,
      genre: 'Comedy/Crime',
      poster_url: 'TheBigLebowski.jpg',
    },
    {
      id: 11,
      title: 'The Guns of Navarone',
      year: 1961,
      genre: 'War/Action',
      poster_url: 'TheGunsofNavarone.jpg',
    },
    {
      id: 12,
      title: 'Chinatown',
      year: 1974,
      genre: 'Neo-Noir',
      poster_url: 'Chinatown.jpg',
    },
    {
      id: 13,
      title: 'Return to Oz',
      year: 1985,
      genre: 'Family/Fantasy',
      poster_url: 'ReturnToOz.jpg',
    },
    {
      id: 14,
      title: 'Silent Running',
      year: 1972,
      genre: 'Sci-Fi',
      poster_url: 'SilentRunning.jpg',
    },
    {
      id: 15,
      title: 'Tristan & Isolde',
      year: 2006,
      genre: 'Romance/War',
      poster_url: 'Tristan-and-Isolde.jpg',
    },
    {
      id: 16,
      title: 'Blazing Saddles',
      year: 1974,
      genre: 'Comedy/Western',
      poster_url: 'FrozenNotDisney.jpg',
    },
  ])
}
