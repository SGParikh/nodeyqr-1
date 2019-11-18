
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Get Users');
});

router.post('/:id', function(req, res) {
  res.send('Create Users');
});

router.put('/:id', function(req, res) {
  res.send('Update users');
});

router.delete('/:id', function(req, res) {
  res.send('Delete users');
});

module.exports = router;