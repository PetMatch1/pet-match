var User = require('../../../models/user');
var Listing = require('../../../models/listing');
var Bid = require('../../../models/bid');

const handler = async (event) => {
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = process.env.API_KEY;
    try {
        await mongoose.connect(dbURI);
    } catch (err) {
        console.log(err);
    };
    const formData = new URLSearchParams(event.body);
    const bid_detail = {
        listing_id: formData.get("listing_id"),
        bid_value: formData.get("bid_value"),
        user_id: formData.get("user_id"),
    };
    var response;
    await Bid.create(bid_detail).then(async function(bid) {
        const listing = await Listing.findById(bid.listing_id);
        const user = await User.findById(bid.user_id);
        listing.bid_list.push(bid._id);
        user.bids.push(bid._id);
        return Promise.all([listing.save(), user.save()]);
    })
    .then(function(values) {
        response = {
            statusCode: 200,
            body: `Bid Added!\n
            Listing ID: ${values[0]._id}\n
            Bidder ID: ${values[1]._id}`
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