var Listing = require('../../../models/listing');

const handler = async (event) => {
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = process.env.API_KEY;
    try {
        await mongoose.connect(dbURI);
    } catch (err) {
        console.log(err);
    };
    const formData = new URLSearchParams(event.queryStringParameters);
    var start;
    var id = formData.get("id");
    if(formData.get("id") == null) {
        response = {
            statusCode: 500,
            body: "No ID Provided"
        }
        return response;
    } else {
        console.log(id);
        await Listing.findByIdAndDelete(id)
        .exec().then(function(listing) {
            response = {
                statusCode: 200,
                body: `Listing Deleted\nListing Deleted: ${listing._id}`
            }
        })
        .catch(function(err) {
            response = {
                statusCode: 500,
                body: err.toString()
            };
            return response;
        });
    }
    return response;
}

module.exports = { handler }