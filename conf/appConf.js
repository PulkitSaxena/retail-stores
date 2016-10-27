// configuration variable for app

var CONF  = {

  MONGO   : {
    CONNECTION_STRING   : 'localhost:27017/stores'
  },

  COLLECTIONS : {
    RETAIL_STORE  : 'retailstore'
  }
}

// exporting the conf
module.exports  = CONF
