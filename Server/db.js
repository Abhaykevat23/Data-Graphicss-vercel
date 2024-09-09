const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://abhaykevat6355:Abhay%402310@cluster0.mo4gzgk.mongodb.net/datavisualization?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully!");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToMongo