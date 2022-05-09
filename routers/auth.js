// router.js
const router = require('express').Router()

// Controllers
const auth = require('../controllers/AuthController')

// Register Page
router.get('/register', auth.register)
router.post('/register', auth.registerPost)

// Login Page
router.get('/login', auth.login)
router.post('/login', auth.loginPost)

module.exports = router;
