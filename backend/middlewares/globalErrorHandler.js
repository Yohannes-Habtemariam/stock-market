
const globalErrorHandler = (err, req, res, next) => {
    console.log(err);

    if(!err.statusCode) err.statusCode = 500;
    if(!err.message) err.message = "unknown error message";

    res.status(err.statusCode).json({message: err.message});
}

export default globalErrorHandler;