import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import clientRouter from "./routes/clientsRoutes.js";
import signupRouter from "./routes/signupRoute.js";
import loginRouter from "./routes/loginRoute.js";
import adminRouter from "./routes/adminRoute.js";
import commentRouter from "./routes/commentsRoutes.js";

import globalErrorHandler from "./middlewares/globalErrorHandler.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@Yohannes.uvleeqn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
mongoose.connection.on("open", () => console.log("Database connection established"));
mongoose.connection.on("error", () => console.error);

app.use(morgan("tiny"));
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/clients", clientRouter);
app.use("/admin", adminRouter);
// contact page
app.use("/comments", commentRouter);

app.use(globalErrorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server has started on port ${process.env.port || 5000}!`);
})