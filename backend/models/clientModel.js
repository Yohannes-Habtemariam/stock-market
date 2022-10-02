import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const { Schema } = mongoose;

const clientSchema = new Schema({
    firstName: String,
    lastName: String,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    isAdmin: {type: Boolean, required: true},
    
    comments: [{
        comment: {type: String, required: true}
    }]
}, {timestamps: true});

clientSchema.pre("save", async function(next){
    if(!this.firstName){ 
        this.firstName = "Tim";
    };

    if(!this.lastName) {
        this.lastName = "Habte"
    };

    // Securing the password using salting round
    const securePassword = await bcrypt.hash(this.password, 12);
    this.password = securePassword;
    
    next();
})

const Client = mongoose.model("Client", clientSchema);

export default Client;

