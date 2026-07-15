const express = require('express');
console.log("Users.routes.js loaded");
const { getUsers, getProfile } = require('../controllers/Users.controllers');
const { authenticateToken } = require("../middlewares/auth.middleware");

const router=express.Router() ;

router.get('/profile', authenticateToken, getProfile);
router.get('/', authenticateToken, getUsers);

module.exports = router;