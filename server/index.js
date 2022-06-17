require("dotenv").config({path : "./config/.env"})
const testRoutes=require('./routes/testRoutes')
const cors = require('cors');

const bodyParser=require("body-parser")
const express=require("express");
const app=express();
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/server/tests',testRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})