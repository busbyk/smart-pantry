const express = require('express');
const router = express.Router();

// serves a very simplistic UI
router.post('/', function(req, res) {
    console.log('Hook route: Request for hook route');
    
    
});

module.exports = router;
