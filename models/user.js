var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone_num: {type: String},
    favorites: [{type: Schema.Types.ObjectId, ref: "Listing"}],
    user_ratings: [{
        rated_user: {type: Schema.Types.ObjectId, ref: "User"},
        rating: {type: Number},
    }],
    ratings: {type: Number},
    listings: [{type: Schema.Types.ObjectId, ref: "Listing"}],
    bids: [{type: Schema.Types.ObjectId, ref: "Bid"}],
    seller_rating: {type: Number},
    bio: {type: String},
});

UserSchema.virtual("url").get(function() {
    return `users/${this.id}/profile`;
})

module.exports = mongoose.model("User", UserSchema);