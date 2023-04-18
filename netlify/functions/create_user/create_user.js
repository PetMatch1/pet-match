var user = require('pet-match/models/user');
var bodyparser = require('body-parser');
const handler = async (event) => {
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = "mongodb+srv://njf9:Solinski712!@cluster0.8dujphq.mongodb.net/PetMatch?retryWrites=true&w=majority";
    async function main() {
        await mongoose.connect(dbURI);
    }
    main().catch(err => console.log(err));
    const formData = event.body;
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
  