'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.json({ message: 'API running' })
})

module.exports = router;