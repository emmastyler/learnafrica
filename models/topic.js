const mongoose = require('mongoose');
const {Schema} = mongoose

const topicSchema = new Schema({
    title:{
        type: String,
        },
    description:{
        type: String,
    },
    videoUrl:{
        type: String,
    },
    subject:{
       type: String,
    }
    },     
    {timestamps: true}
)

module.exports =  mongoose.model("Topic", topicSchema);