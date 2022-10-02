import createError from "http-errors";
import jwt from "jsonwebtoken";

const authorizedClient = (req, res, next) => {
    let token;
    try{
        token = req.headers.authorization.split(" ")[1];

        // If the token is not found
        if(!token){
            throw new Error("You are not authorized!")
        }
        // if the token is found, and then it will do the next function
        const decodedToken = jwt.verify(token, "MyServerSecretKey");
        console.log("Decoded token", decodedToken);
        next();
    }catch{
        next(createError(403, "User could not be authorized. Please try again"));
    }
}
export default authorizedClient;