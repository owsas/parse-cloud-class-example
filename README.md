# parse-cloud-class-example

This is a repository that contains an example on how to use [`parse-server-addon-cloud-class`](https://github.com/owsas/parse-cloud-class) for your [Parse Server](https://github.com/parse-community/parse-server), defining some behaviours for the `_User` class, and for an example `Score` class.

It also contains an example addon (`AnalyticsAddon`), which saves an analytic each time a new object is created. This addon is then plugged to the classes mentioned before. 

## Notable files
* `index.js`
* `cloud/main.js`: The main Parse.Cloud file
* `cloud/addons/AnalyticsAddon.js`: The analytics addon 
* `cloud/classes/User/User.js`: The `_User` class
* `cloud/classes/Score/Score.js`: The `Score` class

To start please take a look at the `cloud/main.js` file.

## LICENSE
MIT

## Credits
Juan Camilo Guarín Peñaranda  
Otherwise SAS  
https://github.com/owsas  
Cali, Colombia  
2018
