const mongoose= require("mongoose")
require("dotenv").config({path : "./config/.env"})


mongoose.connect("mongodb+srv://merndbusername:merndbpassword@cluster0.89koetf.mongodb.net/merncicd?retryWrites=true&w=majority",
{ useNewUrlParser: true,
    useUnifiedTopology: true,

},
(err)=>{
    if(!err) console.log("mongo connected");
    else console.log(err);
});