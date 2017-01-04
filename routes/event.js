const express = require('express');
const router = express.Router();
const Apiai = require('../model/apiai');

const intentEventNames = ['dinner-time', 'item-will-expire-soon', 'new-item-purchased', 'notices-unhealthy-eating-habits', 'open-cabinet'];
const genericEventNames = ['item-used'];

// serves a very simplistic UI
// router.get('/', function(req, res) {
// 	console.log('Event route: Incoming event');
//
// 	let params = req.params;
// 	let query = req.query;
//
// 	res.send(params || query);
// });

router.post('/', function(req, res) {
	let body = req.body;

	if(req.body) {
		try {
			body = JSON.parse(req.body)
		} catch (err) {
			console.log(err);
			return res.send(err);
		}
	}

	res.send(body);
});

module.exports = router;
