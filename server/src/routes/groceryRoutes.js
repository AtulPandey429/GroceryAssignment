const express = require('express');
const router = express.Router();
const groceryController = require('../controllers/groceryController');

// Routes
router.post('/add', groceryController.addGroceryItem);
router.get('/list', groceryController.getAllGroceryItems);

module.exports = router;
