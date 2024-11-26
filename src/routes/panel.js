import express from 'express'
import { verifyToken } from './varifyTokenMiddleware.js'

const panelRoutes = express.Router()

panelRoutes.get('/', verifyToken, (req, res) => {
  if (req.user.role === 'user') {
    return res.render('panel/index.ejs', { userData: req.user })
  } else {
    return res.json('Acceso denegado')
  }
})

export { panelRoutes }
