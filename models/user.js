const mongoose = require('mongoose');
const {schema} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        unique: true,
        },
    },     
    {timestamps: true}
)

export default mongoose.model("User", userSchema);