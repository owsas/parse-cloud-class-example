const { ParseCloudClass } = require('parse-server-addon-cloud-class');

class Score extends ParseCloudClass {
  constructor(params) {
    super(params);

    this.requiredKeys = ['user', 'points']; // All scores must have an user and some points set

    this.minimumValues = {
      points: 0, // Points cannot be lower than 0
    }
  }
}

module.exports = Score;
