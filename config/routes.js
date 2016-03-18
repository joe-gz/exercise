var express = require('express');
var router = express.Router();

var workoutsController = require('../controllers/workoutsController');
var tagsController = require("../controllers/tagsController");

// Workouts:
router.get('/workouts', workoutsController.allWorkouts)

router.get('/workouts/:id',workoutsController.showWorkout)

router.delete('/workouts/:id',workoutsController.deleteWorkout)

router.put('/workouts/:id',workoutsController.updateWorkout)

router.post('/workouts',workoutsController.createWorkout)

// Tags:
router.get('/tags',tagsController.allTags)

router.delete('/tags/:id',tagsController.deleteTag)

router.post('/tags/new',tagsController.createTag)

router.put('/workouts/:id/addtag',workoutsController.addTag)

module.exports = router;
