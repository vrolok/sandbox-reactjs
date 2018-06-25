var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
        {
          name: 'Joe',
          age: 30,
          bio: 'like to walk under the rain on a beach',
          hobbies: ['hiking', 'swimming']
        },
        {
          name: 'Sarah',
          age: 21,
          bio: 'party like crazy with friends all night',
          hobbies: ['drinking', 'netflix']
        }
  ]);
});

module.exports = router;
