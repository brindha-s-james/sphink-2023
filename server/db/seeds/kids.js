/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('kids').del()
  await knex('kids').insert([
    {
      id: 1,
      name: 'Leela James',
      photo: '',
      age: '9',
      description: 'kind, considerate, quiet, determined, crafty',
    },
    {
      id: 2,
      name: 'Lennox James',
      photo: '',
      age: '7',
      description: 'Funny, charming, confident, considerate, sporty',
    },
    {
      id: 3,
      name: 'Anouka Rai',
      photo: '',
      age: '7',
      description: 'helpful, crafty, chatty, thoughtful',
    },
    {
      id: 4,
      name: 'Ishan Rai',
      photo: '',
      age: '8',
      description: 'thoughtful, sporty, strong, adventurous',
    },
  ])
}

