// local imports
var MONGO   = require(__dirname + '/../database/mongo.js');

/**
 * This defines the constructor for the Retail store services class
 * @param {JSON} conf
 */

function RetailStores(conf){

  this._conf   = conf;
  this._mongo  = new MONGO(this._conf.MONGO.CONNECTION_STRING);
}

/**
* This defines the function to display the dictionary data
* @param {object} config
*/

RetailStores.prototype.getStoresList = function(){

  var list = this._mongo.getCollection(this._conf.COLLECTIONS.RETAIL_STORE).find({},{"store_id": 1, "store_name": 1, "description": 1});

  return list;
}

/**
* This defines the function to display the dictionary data
* @param {object} config
*/

RetailStores.prototype.getStoreDetails  = function(storeId){

  var details = this._mongo.getCollection(this._conf.COLLECTIONS.RETAIL_STORE).find({"store_id": storeId});

  return details;
}

module.exports  =  RetailStores;
