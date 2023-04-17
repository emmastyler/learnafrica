const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const {Schema} = mongoose

const subjectSchema = new Schema({
 
    name:{
        type: String,
        unique: true,
        },
    tutor:{
        type: String,
        },
    
    duration:{
        type: String,
        
        },
    description:{
        type: String,
        
        },
    imageUrl:{
            type: String,
            
            },
    },     
    {timestamps: true}
)

module.exports =  mongoose.model("Subject", subjectSchema);