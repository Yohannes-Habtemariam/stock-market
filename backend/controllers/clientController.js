import Client from "../models/clientModel.js";
import createError from "http-errors";

// Get client comments
export const getClientComment = async (req, res, next) => {
    const clientId = req.params.id;

    let clientFound;
    try{
        clientFound = await Client.findById(clientId)
    }catch{
        return next(createError(500, "Client could not be queried. Please try agin!"))
    };

    if(clientFound) {
        const clientData = {
            firstName: clientFound.firstName,
            lastName: clientFound.lastName,
            comments: clientFound.comments,
            isAdmin: clientFound.isAdmin
        }
        console.log(clientData.firstName)
        res.status(201).json(clientData)
    } else {
        next(createError(404, "The client is not found. Please try again!"))
    }
};

// post client comment
export const postClientComment = async (req, res, next) => {
    const clientId = req.params.id;
    const newComment = req.body;

    let clientFound;
    try{
        clientFound = await Client.findById(clientId);
    }catch{
        return next(createError(500, "Query could not be completed. Please try again"));
    };

    const foundComment = clientFound.comments.find(el => {
        return el.comment.toLowerCase() === newComment.comment.toLowerCase();
    });

    if(!foundComment) {
        let updateComment;
        try{
            updateComment = await Client.findByIdAndUpdate(clientId, {$push: {comments: newComment}}, {new: true, runValidators: true});
        }catch{
            return next(createError(500, "Comment could not be updated. Please try again!"))
        };

        res.status(201).json({comments: updateComment.comments})

    } else {
        next(createError(409, "New client comments already exists in your collection. Please try again"))
    }
};

// Delete client all for a single client comments 
export const deleteClientComments = async (req, res, next) => {
    const clientId = req.params.id;

    let foundClient;
    try{
        foundClient = await Client.findById(clientId);
    }catch{
        return next(createError(500, "Client could not be queried. Please try again!"));
    }

    if(foundClient){
        let deleteComment;
        try{
            deleteComment = await Client.findByIdAndUpdate(clientId, {comments: []}, {new: true, runValidators: true})
        }catch{
            return next(createError(500, "Could not be queried. Please try again"))
        }

        res.json({deletedComments: deleteComment.comments});

    } else {
        next(createError(403, "The client's comments are not deleted. Please try again"))
    }
};


// Delete a single comment
export const deleteSingleComment = async (req, res, next) => {
    const clientId = req.params.id;
    const singleCommentID = req.params.commentId;

    let foundClient;
    try{
        foundClient = await Client.findById(clientId);
    }catch{
        return(createError(500, "Client could not be queried. Please try again"))
    }

    if(foundClient){
        let deleteComment;
        try{
            deleteComment = await Client.findByIdAndUpdate(clientId, {$pull: {comments: {_id: singleCommentID}}}, {new: true, runValidators: true});
        } catch {
            return next(createError(500, "Client comment is not deleted. Please try again!"))
        }

        res.status(201).json({comment: deleteComment.comments})

    } else {
        next(createError(403, "Client is not found! Please try again!"))
    } 
}; 

// Delete Client Account

export const deleteClientAccount = async (req, res, next) => {
    const clientId = req.params.id;

    try {
        await Client.findByIdAndRemove(clientId);
    } catch {
        return next(createError(500, "Client could not be deleted. Please try again"));
    }

    res.status(201).json({ message: "Your account has been successfully deleted. Come back soon!" });
};
