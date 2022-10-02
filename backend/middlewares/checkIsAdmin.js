import createError from "http-errors";
import jwt from "jsonwebtoken";
import Client from "../models/clientModel.js";


const isAdmin = async (req, res, next) => {
    let token;
    try{
        token = req.headers.authorization.split(" ")[1];

        console.log("decoded token", token)
        
        if(!token){
            throw new Error("Client is unauthorized")
        }

        // Decode the token sent from the frontend
        const decodedToken = jwt.verify(token, "MyServerSecretKey");
  
        let currentUser;
        try{
            currentUser = await Client.findById(decodedToken.id)
            
        }catch{
            return next(createError(500, "Couldn't query the database. Please try again"));
        };

        // if the current user is found and it is an admin, then continue using next method.
        if(currentUser && currentUser.isAdmin) {
            next();
        } else {
            throw new Error("User unauthorized");
        }


    } catch{
        next(createError(403, "User could not be authorized. Please try again"));
    }
};
export default isAdmin;