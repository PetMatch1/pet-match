var Listing = require('../../../models/listing');
var User = require('../../../models/user');

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
    if(formData.get("startDate") == null) {
        var active = true;
        start = Date.now();
    } else {
        var active = false;
        start = formData.get("startDate");
    }
    const listing_detail = {
        seller: formData.get("seller"),
        price: formData.get("price"),
        name: formData.get("name"),
        age: formData.get("age"),
        breed: formData.get("breed"),
        breed_size: formData.get("breed_size"),
        color: formData.get("color"),
        gender: formData.get("gender"),
        isActive: active,
        startDate: start,
        endDate: formData.get("endDate"),
        traitList: formData.getAll("traitList") || [null],
        zipcode: formData.get("zipCode")
    };
    var response;
    await Listing.create(listing_detail).then(async function(listing) {
        return listing.save();
    })
    .then(function(user) {
        response = {
            statusCode: 302,
            body: `Listing Added\nListing Added to User ID: ${user._id}`,
            headers: {
                "Location": "../../listing?id=" + user._id.toString()
            }
        };
    })
    .catch(function(err) {
        response = {
            statusCode: 302,
            body: err.toString(),
        };
    });
    return response;
}

module.exports = { handler }