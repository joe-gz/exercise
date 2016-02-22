var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var WorkoutSchema = new Schema()
var TagSchema = new Schema ()
var UserSchema = new Schema ()

WorkoutSchema.add({
  description: String,
  feelings: Number,
  time: Number,
  createdAt: {type:Date,default:Date.now},
  tags:[TagSchema],
  user:{type: ObjectId,ref: "User"}
})

TagSchema.add({
  exerciseType: String,
  workouts:[WorkoutSchema]
})

UserSchema.add({
  firstName: String,
  lastName: String,
  workouts:[WorkoutSchema]
})

var WorkoutModel = mongoose.model("Workout",WorkoutSchema)
var UserModel = mongoose.model("User",UserSchema)
var TagModel = mongoose.model("Tag",TagSchema)
