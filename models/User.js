const { Schema, model} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        // validate that it is an email
    },
    thoughts: [],
    friends: []
})

const User = model("User", UserSchema);

module.exports = User;