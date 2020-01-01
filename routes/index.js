var express = require('express');
var router = express.Router();
const indexController = require('../controllers/users/indexController');
const auth = require('../controllers/authentication/registerController');

// GET homepage
router.get('/', indexController.indexGet);

// GET register page
router.get('/register', auth.registerGet);

// POST register post
router.post('/register', auth.registerPost);

// GET fess_members
router.get('/fess_members', auth.fess_membersGet);

module.exports = router;
