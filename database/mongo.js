// module imports
var MONK  = require('monk');

/**
 * Connects to MongoDB using connection string
 * @param {MongoDB connection string} conStr
 */

function Mongo(conStr) {
    this._db = MONK(conStr);
};

/**
 * returns the requested collection instance
 * @param {String} collectionName
 */

Mongo.prototype.getCollection = function (collectionName) {
    var collection;
    try {
        collection = this._db.get(collectionName);
    } catch (error) {
        //If collection is not available, create and return
        this._db.createCollection(collName, { size: 2147483648 });

        collection = this._db.getCollection(collName);
    }

    return collection;
};


// export the mongo instance
module.exports = Mongo;
