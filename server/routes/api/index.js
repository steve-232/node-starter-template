const express = require('express');
const testRoutes = require('./testRoutes');

const router = express.Router();

router.use('/test', testRoutes);
router.use('/', (req, res) => res.send('<h1>API</h1>'));

module.exports = router;
