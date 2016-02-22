var express = require('express');
var router = express.Router();

var workoutsController = require('../controllers/workoutsController');

router.route('/workouts')
.get(workoutsController.showWorkouts)

module.exports = router;
