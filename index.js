const mongoose = require('mongoose');
const express = require('express');
const allRoutes = require('./routes/allRoutes')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const Topic = require('./models/topic')

app.use(bodyParser.json());
dotenv.config()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(allRoutes)
const uri = `mongodb+srv://Emmastyler:${process.env.MONGO_DB_PASSWORD}@cluster0.84epunk.mongodb.net/afrilearn1?retryWrites=true&w=majority`;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
  )
  .then(()=>console.log('connected'))
  .catch(e=>console.log(e));


  app.get('/', async function(req,res){
    
})

app.listen('3000', ()=>{
    console.log('project afrilearn is running on port 3000');
})