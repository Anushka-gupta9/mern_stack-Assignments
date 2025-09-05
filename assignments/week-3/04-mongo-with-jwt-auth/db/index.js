const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    name : {type: String, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    age{type: Number, min: 6}

});

const CourseSchema = new mongoose.Schema({
   Coursename:{type: String},
   password: {type: String, min: 8}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}