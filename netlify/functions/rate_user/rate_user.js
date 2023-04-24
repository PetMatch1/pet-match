var Rating = require('../../../models/rating');
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
    const formData = new URLSearchParams(event.body);
    const rating_detail = {
       rated_id: formData.get("rated_id"),
       rater_id: formData.get("rater_id"),
       rating: formData.get("rating")
    };
    var response;
    await Rating.create(rating_detail).then(async function(rating) {
        const new_rating = {
            rated_user: rating.rated_id,
            rating: rating.rating
        };
        const doc = await User.findById(rating.rater_id);
        doc.user_ratings.push(new_rating);
        await doc.save();
        return new_rating;
    })
    .then(async function(rating) {
        await Rating.find({rated_id: rating.rated_user}, 'rating').exec().then(async function(ratings) {
            var total = 0;
            ratings.forEach(function(rating) {
                total += rating.rating;
            });
            var new_rating = total/ratings.length;
            console.log(new_rating);
            await User.findByIdAndUpdate(rating.rated_user, {seller_rating: new_rating}).exec().then(function(user) {
                response = {
                    statusCode: 200,
                    body: `Rating Added!
                    Rated User ${rating.rated_user}\n
                    Rating was updated to ${user.seller_rating}`
                };
            });
        });
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