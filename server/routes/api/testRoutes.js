const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('<h1>Test</h1>')
  })

module.exports = router;
