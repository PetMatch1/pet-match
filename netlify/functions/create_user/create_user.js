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
    const userdetail = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone_num: formData.get("phone_num"),
        bio: formData.get("bio")
    };
    var response;
    await User.create(userdetail).then(function() {
        response = {
            statusCode: 200,
            body: "New User Inserted!"
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