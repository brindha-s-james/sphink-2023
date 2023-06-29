import express from 'express'
import * as db from '../db/db'

const router = express.Router()

//GET
router.get('/', async (req, res) => {
  try {
    const kidsArr = await db.getAllKids()
    res.json(kidsArr)
    res.sendStatus(200)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})
//POST //may cause issues
router.post('/', async (req, res) => {
  const kid ={...req.body} //may need to be object
  try {
    const newKid = await db.addKid(kid)
    res.json(newKid)
    res.sendStatus(200)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteKid(id)
    res.sendStatus(200)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

//UPDATE
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const newDescription = req.body.description
  try {
    await db.updateKidDescription(id, newDescription)
    res.sendStatus(200)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

export default router
