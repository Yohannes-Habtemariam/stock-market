import mongoose from "mongoose";

const { Schema } = mongoose;

const clientSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  telephone: {type: Number, required: true},
  email: {type: String, required: true},
  textarea: {type: String, required: true}
});

const User = mongoose.model("User", clientSchema);

export default User;
