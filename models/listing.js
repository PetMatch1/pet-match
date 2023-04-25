var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    price: {type: Number, required: true},
    name: {type:String, required: true},
    age: {type: Number, required: true},
    breed: {type: String, required: true},
    breed_size: {
        type: String,
        required: true,
        enum: ["Small", "Medium", "Large"]
    },
    color: {
        type: String, 
        required: true,
        enum: ['Red', 'Apricot', 'Black', 'Black and White', 'Silver', 'Tan']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: true
    },
    isActive: {type: Boolean},
    startDate: {type: Date},
    endDate: {type: Date},
    traitList: [String],
    isBid: {type: Boolean, default: false},
    bid_list: {
        type: [Schema.Types.ObjectId],
        default: []    
    },
    zipcode: {type: Number},
});

listingSchema.virtual("url").get(function () {
    return `/listings/${this.id}`;
})

module.exports = mongoose.model("Listing", listingSchema);