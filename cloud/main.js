const { ParseCloudClass } = require('parse-server-addon-cloud-class');

const AnalyticsAddon = require('./addons/AnalyticsAddon');

const User = require('./classes/User/User');
const Score = require('./classes/Score/Score');

// Create the instances
const user = new User();
const score = new Score();

// Optionally, we could define addons here. Go to the 
// User class to see how you could declare addons in
// a different way
const analyticsAddon = new AnalyticsAddon();
score.useAddon(analyticsAddon);

// Tell Parse to work with the created classes
ParseCloudClass.configureClass(Parse, '_User', user);
ParseCloudClass.configureClass(Parse, 'Score', score);
