import mongoose from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect("mongodb+srv://paulodead6:BUmGW1iLTZMaM5fW@cluster0.iu4whcv.mongodb.net/viva?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection
}

export default conectaNaDatabase