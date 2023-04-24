var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone_num: {type: String,},
    favorites: {
        type: [Schema.Types.ObjectId], 
        ref: "Listing",
        default: []
    },
    user_ratings: {
        type: [Object],
        properties: {
            rated_user: {type: Schema.Types.ObjectId, ref: "User"},
            rating: {type: Number},
        },
        default: []
    },
    listings: {
        type: [Schema.Types.ObjectId], 
        ref: "Listing", 
        default: []
    },
    bids: {
        type: [Schema.Types.ObjectId], 
        ref: "Bid",
        default: []
    },
    seller_rating: {
        type: Number,
        default: null
    },
    bio: {type: String},
});

UserSchema.virtual("url").get(function() {
    return `users/${this.id}/profile`;
})

module.exports = mongoose.model("User", UserSchema);