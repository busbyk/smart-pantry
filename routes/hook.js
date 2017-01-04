const express = require('express');
const router = express.Router();
const app = require('../app');

// serves a very simplistic UI
router.post('/', function(req, res) {
    console.log('Hook route: Request for hook route');

    let body = req.body;

    app.locals.id = body.id;
    console.log('successfully set sessionId');
    res.send('sessionId set');
});

module.exports = router;
