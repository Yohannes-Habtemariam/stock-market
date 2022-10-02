import Client from "../models/clientModel.js";
import createError from "http-errors";
import jwt from "jsonwebtoken";

export const signupPost = async (req, res, next) => {
    const {firstName, lastName, username, password, email} = req.body;

    // is username already exist?
    let foundUsername;
    try{
        foundUsername = await Client.findOne({username: username});
    }catch{
        return next(createError(500, "Database could not be queried. Please try again!"))
    };

    // if username is already exist, a new account will not be created
    if(foundUsername) {
        return next(createError(409, "Username has already been taken. Please try a different username"))
    }

    // is email already exist?
    let foundEmail;
    try{
        foundEmail = await Client.findOne({email: email})
    }catch{
        return next(createError("Database could not be queried. Please try again!"))
    }

     // if email is already exist, a new account will not be created
    if(foundEmail){
        return next(createError(409, "Email has already been taken. Please try another!"))
    }

    // if the chosen username and email are not yet taken, then you can create an new client account
    if(!foundUsername && !foundEmail){

        const newClient = new Client({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            email: email,
            isAdmin: false,
            comments: []
        });

        try{
            await newClient.save()
        }catch{
            return next(createError(500, "Client could not be created. Please try again!"))
        }

        // Create and issue a json web token
        let newToken;
        try{
            newToken = jwt.sign({id: newClient.id}, "MyServerSecretKey", {expiresIn: "1h"});
        }catch{
            return next(createError(500, "Signup could not be completed. Please try again"));
        }

        res.status(201).json({id: newClient._id, token: newToken});

    } else {
        next(createError(404, "The client already exist. Please try again"))
    }
};