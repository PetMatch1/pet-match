var Product = require('../../../models/product');

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
    var searchFilters = new URLSearchParams(event.queryStringParameters);
    var categories = ["Food", "Treats", "Medication", "Beds", "Clothing", "Other"]
    var minPrice = 0;
    var maxPrice = Number.MAX_VALUE;
    if(searchFilters.get("Category") != null) {
        categories = searchFilters.getAll("Category")[0].split(', ');
    };
    if(searchFilters.get("minPrice") != null && searchFilters.get("minPrice") >= 0) {
        minPrice = searchFilters.get("minPrice");
    };
    if(searchFilters.get("maxPrice") != null && searchFilters.get("maxPrice") >= minPrice) {
        maxPrice = searchFilters.get("maxPrice");
    }
    await Product.find()
    .in("Category", categories)
    .where("Price").gte(minPrice).lte(maxPrice)
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