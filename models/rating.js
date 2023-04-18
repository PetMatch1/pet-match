var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    rated_id: {type: Schema.Types.ObjectId},
    rater_id: {type: Schema.Types.ObjectId},
    rating: {type: Number}
});

module.exports = mongoose.model("Rating", ratingSchema);