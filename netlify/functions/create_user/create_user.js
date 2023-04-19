var User = require('../../../models/user');
var bodyparser = require('body-parser');
const handler = async (event) => {
    console.log(event.body);
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = process.env.API_KEY;
    async function main() {
        await mongoose.connect(dbURI);
    }
    main().catch(err => console.log(err));
    const formData = event.body;
    console.log(formData.name);
    const userdetail = {
        name: formData.name,
        email: formData.email,
        phone_num: formData.phone_num || null,
        bio: formData.bio || null
    };
    User.create(userdetail).then(function(err, user) {
        if (err) {
            return {
                statusCode: 500,
                body: err.toString
            };
        } else {
            return {
                statusCode: 200,
                body: user.JSON
            }
        };
    });
  };
  
  module.exports = { handler }
  