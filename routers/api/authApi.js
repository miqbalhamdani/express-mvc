// router.js
const router = require('express').Router()

// Controllers
const auth = require('../../controllers/api/AuthApiController')

// Login Page
router.post('/login', auth.login)

module.exports = router;
