import createError from "http-errors";
import User from "../models/userModel.js"; 

// Get client comment
export const getComment = async (req, res, next) => {

let foundComments; //! try{}catch{} is used to get data from the database
try{
    foundComments = await User.find({});
}catch{
    return next(createError(500, "Could not be queried! Please try again!"))
}

  res.json({comments: foundComments}); //! You don not need to use "status(201)", because you are not creating something new, but you are using what is already exist in the database:

};

// Post client comment
export const postComment = async (req, res, next) => {
  const { firstName, lastName, telephone, email, textarea } = req.body;

  const newComment = new User({
    firstName: firstName,
    lastName: lastName,
    telephone: telephone,
    email: email,
    textarea: textarea,
  });

  try {
    await newComment.save();
  } catch {
    return next(new createError[500]("Client message could not be created!"));
  }
  res.status(201).json({ comment: newComment });
};


// Delete a single comment
export const deleteSingleComment = async (req, res, next) => {
    const commentId = req.params.id;

    let foundComment;
    try{
        foundComment = await User.findByIdAndRemove(commentId);
    }catch{
        return next(createError(403, "Comment could not be deleted. please try again!"))
    }
    let updateComment;
    try{
        updateComment = await User.find({})
    }catch{
        return next(createError(403, "Comment could not be deleted. please try again!"))
    }
    res.status(201).json({comments: updateComment})
}
