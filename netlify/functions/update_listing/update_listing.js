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
    var id = formData.get("id");
    if (id == null) {
        response = {
            statusCode: 500,
            body: "No ID Provided"
        }
        return response;
    }
    const listing_detail = {};
    if (formData.get("seller") != null) {
        listing_detail.seller = formData.get("seller");
    }
    if (formData.get("price") != null) {
        listing_detail.price = formData.get("price");
    }
    if (formData.get("name") != null) {
        listing_detail.name = formData.get("name");
    }
    if (formData.get("age") != null) {
        listing_detail.age = formData.get("age");
    }
    if (formData.get("breed") != null) {
        listing_detail.breed = formData.get("breed");
    }
    if (formData.get("breed_size") != null) {
        listing_detail.breed_size = formData.get("breed_size");
    }
    if (formData.get("color") != null) {
        listing_detail.color = formData.get("color");
    }
    if (formData.get("gender") != null) {
        listing_detail.gender = formData.get("gender");
    }
    if (formData.get("startDate") != null) {
        listing_detail.startDate = formData.get("startDate");
    }
    if (formData.get("endDate") != null) {
        listing_detail.endDate = formData.get("endDate");
    }
    if (formData.get("traitList") != null) {
        listing_detail.traitList = formData.get("traitList");
    }
    if (formData.get("zipCode") != null) {
        listing_detail.zipCode = formData.get("zipCode");
    }
    if (formData.get("photo") != null) {
        listing_detail.photo = formData.get("photo");
    }
    var response;
    await Listing.findByIdAndUpdate(id, listing_detail).then(async function(listing) {
        return listing.save()
    })
    .then(function(user) {
        response = {
            statusCode: 302,
            body: `Listing Updated\nListing Updated to User ID: ${user._id}`,
            headers: {
                "Location": "../../listing?id=" + user._id.toString()
            }
        };
    })
    .catch(function(err) {
        response = {
            statusCode: 500,
            body: err.toString()
        };
    });
    return response;
}

module.exports = { handler }