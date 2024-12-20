const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.get('/', userControllers.index);
router.get('/create', userControllers.create);
router.post('/store', userControllers.store);
router.get('/edit/:id', userControllers.edit);
router.get('/delete/:id', userControllers.destroy);
router.post('/update/:id', userControllers.update);

module.exports = router;
