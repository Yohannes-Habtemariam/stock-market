import createError from "http-errors";
import Client from "../models/clientModel.js";

export const countClients = async (req, res, next) => {
    let numberOfDocuments;
    try{
        numberOfDocuments = await Client.countDocuments({});
    }catch{
        return next(createError(500, "Database could not be queried. Please try again"))
    };

    res.status(201).json({count: numberOfDocuments});

};