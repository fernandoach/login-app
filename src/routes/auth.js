import express from 'express'

const authRoutes = express.Router()

authRoutes.get('/login', (req, res) => {
  return res.render('auth/login.ejs')
})

authRoutes.get('/register', (req, res) => {
  return res.render('auth/register.ejs')
})

authRoutes.post('/register', async (req, res) => {
  try {
    const { nombre, edad, usuario, passwd } = req.body
    
  } catch (error) {
    return res.json(error)
  }
})

export { authRoutes }
