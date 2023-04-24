var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    rated_id: {type: Schema.Types.ObjectId, required: true},
    rater_id: {type: Schema.Types.ObjectId, required: true},
    rating: {type: Number, required: true}
});

module.exports = mongoose.model("Rating", ratingSchema);