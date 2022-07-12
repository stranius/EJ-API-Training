// import userData from "../seedData/users.json"
const userData = require("../seedData/users.json")
const fs = require('fs');
const ObjectId = require('mongodb').ObjectId

const id = '_id":"62cb463eca23f74c52e74663'
const data = {
        firstName: "Kurtis",
        lastName: "Fisher",
        email: "BigHog2002@gmail.com",
        dateOfBirth: "04,15,2002",
        address: { 
            street: "1816 woodrow Ave",
            city: "Wichita Falls",
            country: "USA",
            state: "TX",
            zipcode: "76308"
        },
        addressBilling: {
            street: "5005 lake park dr.",
            city: "Wichita Falls",
            country: "USA",
            state: "TX",
            zipcode: "76308"
        }
}

function getAllUsers() {
    return userData; 
}

var response = getAllUsers();

function getUser(id) {
    return userData.find(user => id == user._id);
    
}

function createUser(newUser) {
    var findUser = userData.find(user => newUser.email == user.email);
    if(findUser === undefined){
        const objectId = new ObjectId();
        newUser._id = objectId;
        userData.push(newUser);
        const json = JSON.stringify(userData);
        fs.writeFile(__dirname + '/../seedData/users.json', json , () => null );
        return newUser;
    } else {
        console.log("user already exist");
        return;
    }
}
