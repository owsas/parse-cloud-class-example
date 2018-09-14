const { ParseCloudClass } = require('parse-server-addon-cloud-class');

// Lets save some analytics each time an user is created
const AnalyticsAddon = require('../../addons/AnalyticsAddon');
const analyticsAddon = new AnalyticsAddon();

class User extends ParseCloudClass {
  addons = [ analyticsAddon ]; // Use the analytics addon

  defaultValues = {
    // By default, all users receive emails
    receiveEmails: true,
  }

  // For instance, in this application we could
  // have an internal calculation of ratings for the users
  immutableKeys = ['rating'];

  minimumValues = {
    rating: 0, // The rating cannot go below 0
  }
  
  async processBeforeSave(req) {
    const user = await super.processBeforeSave(req);

    // Force set the user's name to appear in the marketing emails
    if (!user.get('name')) {
      user.set('name', user.get('username'));
    }

    return user;
  }
}

module.exports = User;
