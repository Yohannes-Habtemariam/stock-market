import createError from "http-errors";
import Client from "../models/clientModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginPost = async (req, res, next) => {
    const {username, password} = req.body;

    let clientFound;
    try{
        clientFound = await Client.findOne({username: username});
    }catch{
        return next(createError(500, "Client could not be queried! Please try again"))
    };

    // If client found, recognize it with its ID
    if(clientFound) {
        let isPasswordValid;
        try{
            isPasswordValid = await bcrypt.compare(password, clientFound.password)
        }catch{
            return next(createError(500, "Logging in process failed. Please try again"))
        }

        if (!isPasswordValid) {
            return next(createError(401, "Incorrect password. Please try again"));
        }

        // Create and issue a json web token
        let newToken;
        try{
            newToken = jwt.sign({id: clientFound.id}, "MyServerSecretKey", {expiresIn: "1h"})
        }catch{
            return next(createError(500, "Signup could not be completed. Please try again"));
        }
      
        res.status(201).json({id: clientFound._id, token: newToken});

    } else{
        next(createError(404, "No user exists with this username. Please try again"))
    }
};