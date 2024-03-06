const express = require('express');
const router = express.Router();
const login = require('../controllers/login');
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");
const deleteFav = require("../controllers/deleteFav");
const getCharById = require('../controllers/getCharById')

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", login);
router.post("/register", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
