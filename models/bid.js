var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema ({
    listing_id: {type: Schema.Types.ObjectId, ref: "Listing", required: true},
    bid_value: {type: Number, required: true},
    user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
    status: {
        type: String,
        enum: ["Highest", "Outbid"],
        default: "Highest",
    },
    isAccepted: {type: Boolean, default: false}
});

bidSchema.virtual("url").get(function() {
    return `users/${this.id}/profile`;
});

module.exports = mongoose.model("Bid", bidSchema);