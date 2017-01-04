const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Apiai = require('../model/Apiai');

const intentEventNames = ['dinner-time', 'item-will-expire-soon', 'new-item-purchased', 'notices-unhealthy-eating-habits', 'open-cabinet'];
const genericEventNames = ['item-used'];

router.post('/', function(req, res) {
	let body = req.body,
		eventName,
		responseText;

	if(body) {
		eventName = body.name;
	} else {
		return res.status(400).send('No event name on the request');
	}

	if(intentEventNames.includes(eventName)) {
		let apiai = new Apiai();
		apiai.triggerEvent(eventName).then((result) => {
			return res.status(200).send(result);
		}).catch(err => {
			return res.status(500).send(err);
		})
	} else if (genericEventNames.includes(eventName)) {

	} else {
		return res.status(400).send(eventName + ' is not a valid event name.');
	}
});

module.exports = router;
