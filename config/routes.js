var express = require('express');
var router = express.Router();

var workoutsController = require('../controllers/workoutsController');
var tagsController = require("../controllers/tagsController");

// Workouts:
router.route('/workouts')
.get(workoutsController.allWorkouts)

router.route('/workouts/:id')
.get(workoutsController.showWorkout)

router.route('/workouts/:id')
.delete(workoutsController.deleteWorkout)

router.route('/workouts/:id')
.put(workoutsController.updateWorkout)

router.route('/workouts/new')
.post(workoutsController.createWorkout)

// Tags:
router.route('/tags')
.get(tagsController.allTags)

router.route('/tags/:id')
.delete(tagsController.deleteTag)

router.route('/tags/new')
.post(tagsController.createTag)

router.route('/workouts/:id/addtag')
.put(workoutsController.addTag)

module.exports = router;
