import express from 'express'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

// filename y dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = express()

// middleware's
server.use(express.json())
server.set('view engine', 'ejs')
server.use(express.static('public'))
server.set('views', join(__dirname, 'views'))
server.use(express.urlencoded({ extended: true }))

// endpoints
server.get('/', (req, res) => {
  return res.render('index.ejs')
})

server.get('/login', (req, res) => {
  return res.render('auth/login.ejs')
})

// listener
server.listen(3000, () => {
  console.log('server on => http://localhost:3000')
})