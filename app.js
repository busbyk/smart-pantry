const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const ADAuth = require('./model/ADAuth');

// Require routes
const index = require('./routes/index');
const authRoute = require('./routes/authenticatedRoute');
const unauthRoute = require('./routes/unauthenticatedRoute');

// Load config
const config = require('./config');

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Initialize passport and authenticate function
passport.use(new BasicStrategy((username, password, done) => {
	let adAuth = new ADAuth();
	return adAuth.bind(username, password, done);
}));

// Declare routes
app.use('/', index);
app.use('/authenticatedRoute', passport.authenticate('basic', { session: false }), authRoute);
app.use('/unauthenticatedRoute', unauthRoute);

// Start express server
app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});
