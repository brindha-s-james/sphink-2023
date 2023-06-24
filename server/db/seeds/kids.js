/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed (knex) {
  await knex('kids').del()
  await knex('kids').insert([
    {
      id: 1,
      name: 'Leela James',
      photo: 'images/leela.jpeg',
      age: '9',
      description: 'kind, considerate, quiet, determined, crafty',
    },
    {
      id: 2,
      name: 'Lennox James',
      photo: 'images/lennox.jpeg',
      age: '7',
      description: 'Funny, charming, confident, considerate, sporty',
    },
    {
      id: 3,
      name: 'Anouka Rai',
      photo: 'images/anouka.jpeg',
      age: '7',
      description: 'helpful, crafty, chatty, thoughtful',
    },
    {
      id: 4,
      name: 'Ishan Rai',
      photo: 'images/ishan.jpeg',
      age: '8',
      description: 'thoughtful, sporty, strong, adventurous',
    },
  ])
}

