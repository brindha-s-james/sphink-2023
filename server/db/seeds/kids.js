/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function seed(knex) {
  await knex('kids').del()
  await knex('kids').insert([
    {
      id: 1,
      name: 'Leela',
      photo: 'leela.jpeg',
      age: '9',
      description: 'kind, considerate, quiet, determined, crafty',
    },
    {
      id: 2,
      name: 'Lennox',
      photo: 'lennox.jpeg',
      age: '7',
      description: 'Funny, charming, confident, considerate, sporty',
    },
    {
      id: 3,
      name: 'Anouks',
      photo: 'anouka.jpeg',
      age: '7',
      description: 'helpful, crafty, chatty, thoughtful',
    },
    {
      id: 4,
      name: 'Ish',
      photo: 'ishan.jpeg',
      age: '8',
      description: 'thoughtful, sporty, strong, adventurous',
    },
  ])
}
