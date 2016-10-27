// module imports

var EXPRESS   =   require('express');
var ROUTER    =   EXPRESS.Router();

// route for
ROUTER.get('/', _home);


/**
 * route for home page
 * @param {Object} req
 * @param {Object} res
 */

function _home(req, res){

}

// exporting the route
module.exports  = ROUTER;
