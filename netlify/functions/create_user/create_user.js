var User = require('../../../models/user');
var express = require('express');

const handler = async (event) => {
    var mongoose = require('mongoose');
    mongoose.set("strictQuery", false);
    const dbURI = process.env.API_KEY;
    try {
        await mongoose.connect(dbURI);
    } catch (err) {
        console.log(err);
    };
    const formData = JSON.parse(event.body);
    const userdetail = {
        name: formData.name,
        email: formData.email,
        phone_num: formData.phone_num || null,
        bio: formData.bio || null
    };
    var response;
    await User.create(userdetail).then(function(user) {
        response = {
            statusCode: 200,
            body: "New User Inserted!"
        };
    })
    .catch(function(err) {
        response = {
            statusCode: 500,
            body: err.toString
        };
    });
    return response;
}

module.exports = { handler }