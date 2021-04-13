const { Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const ReactionSchema = new Schema({
    reactionID: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Schema.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use getter method to format the timestamp on query
    }
})
