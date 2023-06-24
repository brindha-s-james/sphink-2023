import express from 'express'
import path from 'path'
import kids from './routes/kids'

const server = express()
server.use('/api/v1/kids', kids)
server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))

export default server
