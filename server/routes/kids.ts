import express from "express";
import * as db from '../db/db'


const router = express.Router()

router.get('/', async(req, res)=>{
  try{
    const kidsArr = await db.getAllKids()
    res.json(kidsArr)
  }catch(error){
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

export default router
