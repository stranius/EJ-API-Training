// import userData from "../seedData/users.json"
const userData = require("../seedData/users.json")
const fs = require('fs');

const email = 'Payton@gmail.com'
const data = {
    firstName: "Payton",
        lastName: "Fisher",
        email: "Payton@gmail.com",
        dateOfBirth: "12,23,1998",
        address: { 
            street: "1816 woodrow Ave",
            city: "Wichita Falls",
            country: "USA",
            state: "TX",
            zipcode: "76308"
        },
        addressBilling: {
            street: "6 gerold ln.",
            city: "Belleville",
            country: "USA",
            state: "IL",
            zipcode: "62223"
        }
}

function getAllUsers() {
    return userData; 
}

var response = getAllUsers();

function getUser(email) {
    return userData.find(user => email == user.email);
    
}

function createUser(newUser) {
    userData.push(newUser);
    const json = JSON.stringify(userData);
    fs.writeFile(__dirname + '/../seedData/users.json', json , () => null );
    return newUser;
}

