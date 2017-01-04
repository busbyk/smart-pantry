const express = require('express');
const bodyParser = require('body-parser');

// Require routes
const index = require('./routes/index');
const event = require('./routes/event');
const pantryAnalyzer = require('./routes/pantryAnalyzer');

// Load config
const config = require('./config');

// Initialize express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Declare routes
app.use('/', index);
app.use('/event', event);
app.use('/pantryAnalyzer', pantryAnalyzer);

// Start express server
app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`);
});
