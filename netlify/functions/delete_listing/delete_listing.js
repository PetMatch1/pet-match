var Listing = require('../../../models/listing');

const handler = async (event) => {
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = process.env.API_KEY;
    console.log(event)
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
            statusCode: 302,
            body: "No ID Provided",
            headers: {
                "Location": "../../search"
            }
        }
        return response;
    } else {
        console.log(id);
        await Listing.findByIdAndDelete(id)
        .exec().then(function(listing) {
            response = {
                statusCode: 302,
                body: `Listing Deleted\nListing Deleted: ${listing._id}`,
                headers: {
                    "Location": "../../search"
                }
            }
        })
        .catch(function(err) {
            response = {
                statusCode: 302,
                body: err.toString(),
                headers: {
                    "Location": "../../search"
                }
            };
        });
    }
    return response
}

module.exports = { handler }