const { ParseCloudClass } = require('parse-server-addon-cloud-class');
const { ParseService } = require('@owsas/parse-service');

/**
 * Saves an analytic each time an object is created
 */
class AnalyticsAddon extends ParseCloudClass {
  /**
   * @param {Parse.Cloud.AfterSaveRequest} request 
   */
  async afterSave(request) {
    const obj = request.object;
    
    // Run only if the object is new
    if(!obj.existed()) {
      const analytic = new Parse.Object('Analytic');
      analytic.set('event', 'created');
      analytic.set('object', { className: obj.className, id: obj.id });
      await ParseService.save(analytic, { useMasterKey: true });
    }
    
    return obj;
  }
}

module.exports = AnalyticsAddon;
