
const Subject = require('../models/subject');
const Topic = require('../models/topic');

const getSubject = async (req, res ) => {
    try {
        const subject = await Subject.find({});
        res.status(200).json(subject)
        console.log(subject);
    } catch (error) {
        console.log(error);
    }
}

const getTopic = async (req, res ) => {
    try {
        const subjectTopic = req.params.subject
        
        const topic = await Topic.find({subject: subjectTopic});
        console.log(topic);
        res.status(200).json(topic)
       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getSubject, getTopic}