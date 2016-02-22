var express = require('express');
var router = express.Router();

var workoutsController = require('../controllers/workoutsController');

router.route('/workouts')
.get(workoutsController.allWorkouts)

router.route('/workouts/:id')
.get(workoutsController.showWorkout)

router.route('/workouts/new')
.post(workoutsController.createWorkout)

module.exports = router;
