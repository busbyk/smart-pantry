const express = require('express');
const router = express.Router();

// serves a very simplistic UI
router.get('/', function(req, res) {
	console.log('pantryAnalyzer route: Request for landing page');
	res.send('you hit the pantryAnalyzer route successfully - still in development');
});

module.exports = router;
