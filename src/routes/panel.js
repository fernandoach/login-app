import express from 'express'
import { verifyToken } from './varifyTokenMiddleware.js'

const panelRoutes = express.Router()

panelRoutes.get('/', verifyToken, (req, res) => {
  return res.render('panel/index.ejs')
})

export { panelRoutes }
