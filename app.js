const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const Apiai = require('./model/Apiai');

// Require routes
const index = require('./routes/index');
const event = require('./routes/event');
const hook = require('./routes/hook');
const pantryAnalyzer = require('./routes/pantryAnalyzer');

// Load config
const config = require('./config');

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const intentEventNames = ['dinner-time', 'item-will-expire-soon', 'new-item-purchased', 'notices-unhealthy-eating-habits', 'open-cabinet'];
const genericEventNames = ['item-used'];
let sessionId;

// Declare routes
app.use('/', index);
app.use('/event', (req, res) => {
	let body = req.body,
		eventName;

	if(body) {
		eventName = body.name;
	} else {
		return res.status(400).send('No event name on the request');
	}

	if(intentEventNames.includes(eventName)) {
		let apiai = new Apiai(sessionId);
		apiai.triggerEvent(eventName).then((result) => {
			return res.status(200).send(result || 'event triggered');
		}).catch(err => {
			return res.status(500).send(err);
		})
	} else if (genericEventNames.includes(eventName)) {

	} else {
		return res.status(400).send(eventName + ' is not a valid event name.');
	}
});
app.use('/hook', (req, res) => {
	console.log('Hook route: Request for hook route');

	let body = req.body;

	sessionId = body.id;
	console.log('successfully set sessionId');
	res.send('sessionId set');
});
app.use('/pantryAnalyzer', pantryAnalyzer);

// Start expiration watcher
const ExpirationWatcher = require('./model/ExpirationWatcher');
let expirationWatcher = new ExpirationWatcher();

// Start express server
app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});

module.exports = app;
