const express = require('express')
const Router = express.Router()
const  {getSubject, getTopic}  = require('../controller/subjectController');

Router.get('/subjects', getSubject)
Router.get('/subjects/:subject', getTopic)


module.exports = Router; 