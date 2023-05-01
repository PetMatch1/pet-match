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
    var response;
    var searchFilters = new URLSearchParams(event.body);
    var genders = ["Male", "Female"];
    var colors = ["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"];
    var breeds = ["Small", "Medium", "Large"];
    var minPrice = 0;
    var maxPrice = Number.MAX_VALUE;
    if(searchFilters.get("gender") != null) {
        genders = searchFilters.getAll("gender");
    };
    if(searchFilters.get("color") != null) {
        colors = searchFilters.getAll("color");
    };
    if(searchFilters.get("breed") != null) {
        breeds = searchFilters.getAll("breed");
    };
    if(searchFilters.get("minPrice") != null && searchFilters.get("minPrice") >= 0) {
        minPrice = searchFilters.get("minPrice");
    };
    if(searchFilters.get("maxPrice") != null && searchFilters.get("maxPrice") >= minPrice) {
        maxPrice = searchFilters.get("maxPrice");
    };
    console.log(colors);
    await Listing.find()
    .in("gender", genders)
    .in("color", colors)
    .in("breed_size", breeds)
    .where("price").gte(minPrice).lte(maxPrice)
    .exec().then(function(listings) {
        console.log(listings);
        response = {
            statusCode: 200,
            body: JSON.stringify(listings)
        }
    })
    .catch(function(err) {
        response = {
            statusCode: 500,
            body: err.toString
        }
    });
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*", // Allow from anywhere 
        },
        body: JSON.stringify(response)
    }
}

module.exports = { handler }