const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index');
});

// About route
router.get('/about', (req, res) => {
    res.render('about');
});

// Projects route
router.get('/projects', (req, res) => {
    res.render('projects');
});

module.exports = router;
