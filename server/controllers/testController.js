require('dotenv').config()

module.exports.test = async (req,res) => {
    res.status(200).send("Hello from NodeJS");
}