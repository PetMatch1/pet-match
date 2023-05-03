var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    Product: {type: String, required: true},
    Price: {type: Number, required: true},
    Category: {type:String, required: true},
    Size: {type: Number, required: true},
})
productSchema.virtual("url").get(function () {
    return `/products/${this.id}`;
})
module.exports = mongoose.model("Product", productSchema);