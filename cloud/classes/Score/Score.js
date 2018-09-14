const { ParseCloudClass } = require('parse-server-addon-cloud-class');

class Score extends ParseCloudClass {
  requiredKeys = ['user', 'points']; // All scores must have an user and some points set

  minimumValues = {
    points: 0,
  }
}

module.exports = Score;
